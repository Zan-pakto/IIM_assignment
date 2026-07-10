import app from './app.js';
import { config } from './src/config/env.js';

const port = config.port;

app.listen(port, () => {
  console.log(`[Server] Running in ${config.nodeEnv} mode on port ${port}`);
});
