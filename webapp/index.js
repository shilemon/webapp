const express = require('express');
const app = express();
const version = process.env.APP_VERSION || "v1";

app.get('/', (req, res) => {
  res.send(`<h1>My WebApp - Version ${version}</h1><p>Hostname: ${require('os').hostname()}</p>`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: "ok", version });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}, version ${version}`));
