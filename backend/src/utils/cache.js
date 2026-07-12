import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CACHE_DIR = path.join(__dirname, '../../data');
const CACHE_FILE = path.join(CACHE_DIR, 'analysisCache.json');

// Ensure the data directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

// Load cache from disk
function loadCache() {
  if (!fs.existsSync(CACHE_FILE)) {
    return {};
  }
  try {
    const data = fs.readFileSync(CACHE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('[Cache] Error reading cache file:', err.message);
    return {};
  }
}

// Save cache to disk
function saveCache(cacheData) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData, null, 2), 'utf8');
  } catch (err) {
    console.error('[Cache] Error writing cache file:', err.message);
  }
}

export const cache = {
  get: (key) => {
    const data = loadCache();
    const cleanKey = String(key).trim().toLowerCase();
    const cachedItem = data[cleanKey];
    if (!cachedItem) return null;
    
    // Check if the cache entry is older than 24 hours (86,400,000 ms)
    const age = Date.now() - cachedItem.timestamp;
    if (age > 24 * 60 * 60 * 1000) {
      delete data[cleanKey];
      saveCache(data);
      console.log(`[Cache] Cache expired for: ${cleanKey}`);
      return null;
    }
    
    return cachedItem.data;
  },
  
  set: (key, val) => {
    const data = loadCache();
    const cleanKey = String(key).trim().toLowerCase();
    data[cleanKey] = {
      timestamp: Date.now(),
      data: val
    };
    saveCache(data);
    console.log(`[Cache] Cached result saved for: ${cleanKey}`);
  }
};
