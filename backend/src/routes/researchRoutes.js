import { Router } from 'express';
import { researchController } from '../controllers/researchController.js';

// Route mapping for agent queries and research history.
export const researchRoutes = Router();

// POST route for company analysis
researchRoutes.post('/analyze', researchController.analyzeCompany);
