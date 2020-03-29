const express = require("express");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json({
    message: "api works"
  });
});

routes.post("/users", (request, response) => {
  console.log("teste query:", request.query);
  return response.json({
    message: "Hello Post",
    evento: "Semana Oministack 11.0",
    aluno: "Teste"
  });
});

module.exports = routes;
