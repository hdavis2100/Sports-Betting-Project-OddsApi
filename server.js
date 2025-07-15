import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app = express();

// 1) Serve dist/ as static at the site root
app.use(express.static(path.join(__dirname, 'dist')));

// 2) Catch-all: any path (including sub‑paths) should return index.html
//    Using a RegExp here so path-to-regexp doesn’t try to parse wildcards.
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
