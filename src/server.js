import "dotenv/config";
import express from "express";
import JogosRoutes, { jogosRoutes } from "./routes/jogo.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/jogos", jogosRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});