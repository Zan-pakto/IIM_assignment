import axios from 'axios';
import { config } from '../config/env.js';

/**
 * Perform a web search using the Tavily Search API.
 * @param {string} query - The search query to submit.
 * @returns {Promise<object>} The raw data payload returned from Tavily.
 */
export const searchTavily = async (query) => {
  const apiKey = config.tavilyApiKey;
  if (!apiKey) {
    throw new Error('Tavily API key is missing. Please set TAVILY_API_KEY in the environment.');
  }

  try {
    const response = await axios.post('https://api.tavily.com/search', {
      api_key: apiKey,
      query,
      search_depth: 'advanced',
      include_answer: true,
      max_results: 5
    });

    return response.data;
  } catch (error) {
    const details = error.response?.data?.detail || error.response?.data || error.message;
    console.error('[Tavily Tool] Search API error:', details);
    throw new Error(`Tavily search failed: ${typeof details === 'object' ? JSON.stringify(details) : details}`);
  }
};
