import fs from "node:fs";
import https from "node:https";
import net from "node:net";

const listenHost = "::1";
const listenPort = 3443;
const targetHost = "127.0.0.1";
const targetPort = 3443;

const key = fs.readFileSync("certificates/localhost-key.pem");
const cert = fs.readFileSync("certificates/localhost.pem");

const server = https.createServer({ key, cert }, (req, res) => {
  const proxyReq = https.request(
    {
      host: targetHost,
      port: targetPort,
      method: req.method,
      path: req.url,
      headers: {
        ...req.headers,
        host: `localhost:${listenPort}`,
      },
      rejectUnauthorized: false,
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode ?? 502, proxyRes.headers);
      proxyRes.pipe(res);
    },
  );

  proxyReq.on("error", (error) => {
    res.writeHead(502, { "content-type": "text/plain; charset=utf-8" });
    res.end(`Local preview proxy error: ${error.message}`);
  });

  req.pipe(proxyReq);
});

server.on("upgrade", (req, socket, head) => {
  const upstream = net.connect(targetPort, targetHost, () => {
    upstream.write(
      `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n` +
        Object.entries(req.headers)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\r\n") +
        "\r\n\r\n",
    );
    if (head.length) upstream.write(head);
    socket.pipe(upstream).pipe(socket);
  });

  upstream.on("error", () => socket.destroy());
});

server.listen(listenPort, listenHost, () => {
  console.log(`IPv6 localhost proxy listening on https://[${listenHost}]:${listenPort}`);
});
