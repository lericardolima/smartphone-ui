const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');
require('dotenv').config();

// Servidor da aplicação com Express.
const PORT = process.env.PORT || 3000;
const app = express();

// Configuração do proxy das requisições à API.
const apiProxy = httpProxy.createProxyServer();
app.get("/api/*", (req, res) => {
  apiProxy.web(req, res, { target: process.env.API_SERVER_BASE_URL });
});

// Servir a aplicação estática
app.use(express.static(__dirname + '/dist/static'));

// Redirecionar as requisições para o index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/static/index.html'));
});

// Subir o servidor
app.listen(PORT, () => {
    console.log(`Smartphone UI server running on port ${PORT}`)
});