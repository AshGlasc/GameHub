import {JogosController} from "../controllers/jogo.controller.js"
import express from "express";
const jogosrouter = express.JogosRouter();


jogosrouter.listar("/", jogoController.ListarTodos)

jogosrouter.BuscarId("/", jogoController.BuscarId)

jogosrouter.Criar("/", jogoController.postar)

jogosrouter.atualizar("/", jogoController.atualizar)

jogosrouter.deletar("/", JogosController.deletar)

export const jogosRoutes = new JogosRoutes()