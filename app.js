const path = require("path");
// "import express from 'express'" equivale à
const express = require("express");
const router = require("express").Router();

// 1. Instanciar um novo servidor web
const app = express();
const PORT = 4000; //Definir a porta, pode ser qualquer uma, menos 3000 que é do REACT

// Configurar a pasta public para servir conteúdo estático (funcionar CSS e Imagens)
app.use(express.static("public"));

app.use("/", router);
app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));

// 2. Configurar quais rotas vamos escutar no servidor web, e o que vamos responder às requisições delas
// Todo listener de rota recebe 2 parâmetros principais: uma string determinando qual rota observar, e uma função callback para executar quando acontece a requisição nessa rota
// A callback dos listeners sempre recebe 2 parâmetros: request e response
router.get("/", (request, response) => {
  console.log("GET request on /homepage route");
  return response.sendFile(path.join(__dirname, "/views/homepage.html"));
});

router.get("/works", (request, response) => {
    console.log("GET request on /works route");
    return response.sendFile(path.join(__dirname, "/views/works.html"));
});

router.get("/about", (request, response) => {
    console.log("GET request on /about route");
    return response.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get("/gallery", (request, response) => {
    console.log("GET request on /gallery route");
    return response.sendFile(path.join(__dirname, "/views/gallery.html"));
});


