const app = express();

app.post("/users", (request, response) => {
  console.log("teste query:", request.query);
  return response.json({
    message: "Hello Post",
    evento: "Semana Oministack 11.0",
    aluno: "Teste"
  });
});

app.listen(8080);
