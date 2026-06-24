const http = require('http');
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');
  const file = url.pathname === '/' ? 'inquiry-preview.html' : url.pathname.replace(/^\//, '');
  const full = path.resolve(root, file);
  if (!full.startsWith(root)) { res.writeHead(403); res.end('Forbidden'); return; }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': file.endsWith('.html') ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8' });
    res.end(data);
  });
});
server.listen(process.env.PORT || 3789, '127.0.0.1');
