import { GoogleGenAI } from '@google/genai';
import { config } from '../config/env.js';

// Validate that the API key is present
if (!config.googleApiKey) {
  console.warn('[Gemini Service] Warning: GOOGLE_API_KEY is not defined in the environment.');
}

// Initialize the base Google Gen AI client instance
export const ai = new GoogleGenAI({
  apiKey: config.googleApiKey
});

// Reusable model configuration and helper wrapper for Gemini 2.5 Flash
export const geminiModel = {
  name: 'gemini-2.5-flash',
  
  /**
   * Generates content using the gemini-2.5-flash model.
   * @param {string|object} contents - Prompt text or content object structure.
   * @param {object} [options] - Additional generation configuration options.
   * @returns {Promise<any>} Response output from the Gemini API.
   */
  async generateContent(contents, options = {}) {
    return ai.models.generateContent({
      model: this.name,
      contents,
      ...options
    });
  }
};
