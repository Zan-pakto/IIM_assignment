import express from 'express';
import cors from 'cors';
import { config } from './src/config/env.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { researchRoutes } from './src/routes/researchRoutes.js';

const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors({
  origin: config.corsOrigin
}));

// JSON body parser middleware
app.use(express.json());

// URL-encoded body parser middleware
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API Routes
app.use('/api/research', researchRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
