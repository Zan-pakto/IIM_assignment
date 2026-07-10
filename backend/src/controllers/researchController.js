// Route controller handling analysis submissions and client event streaming (SSE).

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

    // Success response format (no AI logic yet)
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    next(error);
  }
};

export const researchController = {
  analyzeCompany
};
