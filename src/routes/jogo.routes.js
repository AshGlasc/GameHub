import {JogosController} from "../controllers/jogo.controller.js"
import express from "express";
const router = express.Router();

jogosRouter.listar("/", jogoController.ListarTodos)

jogosRouter.BuscarId("/", jogoController.BuscarId)

jogosRouter.Criar("/", jogoController.postar)

jogosRouter.atualizar("/", jogoController.atualizar)

jogosRouter.deletar("/", jogoController.deletar)

   listar,
  BuscarId,
  Criar,
  atualizar,
  deletar





export const jogosRoutes = new JogosRoutes()