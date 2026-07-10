import { Router } from 'express';

// Route mapping for agent queries and research history.
export const researchRoutes = Router();

// Placeholder route for research queries
researchRoutes.get('/', (req, res) => {
  res.json({ message: 'Research API is running successfully' });
});
