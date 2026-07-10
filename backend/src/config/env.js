import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  googleApiKey: process.env.GOOGLE_API_KEY,
  tavilyApiKey: process.env.TAVILY_API_KEY
};
