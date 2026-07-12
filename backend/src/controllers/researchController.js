import { graph } from '../graph/researchGraph.js';
import { cache } from '../utils/cache.js';

/**
 * Wraps a promise in a timeout threshold rejection.
 * @param {Promise} promise 
 * @param {number} ms 
 */
const withTimeout = (promise, ms) => {
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`Analysis timed out after ${ms / 1000} seconds.`));
    }, ms);
  });
  return Promise.race([
    promise.finally(() => {
      clearTimeout(timeoutId);
    }),
    timeoutPromise
  ]);
};

/**
 * Controller to handle company investment research analysis submissions.
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
export const analyzeCompany = async (req, res, next) => {
  try {
    const { company } = req.body;

    // Validation: Check if the company field exists
    if (company === undefined) {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "The 'company' field is required in the request body."
      });
    }

    // Validation: Check if the company field is a non-empty string
    if (typeof company !== 'string' || company.trim() === '') {
      return res.status(400).json({
        success: false,
        error: "Bad Request",
        message: "The 'company' field must be a non-empty string."
      });
    }

    const cleanCompany = company.trim().toLowerCase();

    // Check local disk cache first
    const cachedResult = cache.get(cleanCompany);
    if (cachedResult) {
      console.log(`[Controller] Cache HIT for: ${company}`);
      return res.status(200).json({
        success: true,
        data: cachedResult
      });
    }

    // Set timeout to 90 seconds (allows sufficient time for search + LLM synthesis)
    const TIMEOUT_MS = 90000;

    console.log(`[Controller] Cache MISS. Starting research pipeline for: ${company}`);
    
    // Invoke the compiled LangGraph workflow with timeout wrapping
    const result = await withTimeout(
      graph.invoke({ company }),
      TIMEOUT_MS
    );

    console.log(`[Controller] Successfully completed research pipeline for: ${company}`);

    const reportData = result.report || result;

    // Save output in the cache
    cache.set(cleanCompany, reportData);

    // Return the final formatted report from the graph
    res.status(200).json({
      success: true,
      data: reportData
    });
  } catch (error) {
    console.error(`[Controller] Error in research pipeline:`, error.message);
    
    // Differentiate timeout errors from other internal server issues
    if (error.message.includes('timed out')) {
      return res.status(504).json({
        success: false,
        error: "Gateway Timeout",
        message: error.message
      });
    }
    
    // Forward other errors to the global errorHandler middleware
    next(error);
  }
};

export const researchController = {
  analyzeCompany
};
