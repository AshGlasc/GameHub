import { Pool } from "undici-types";
import {jogosRepositories, listar, BuscarId, Criar, atualizar, deletar } from "../repositories/jogo.repositories.js";


async function listar() {
    const jogos = await jogosRepositories.listar()
    return jogos
}

async function BuscarId() {
    const jogos = await jogosRepositories.BuscarId()
    return jogos
}

async function Criar() {
    const jogos = await jogosRepositories.Criar()
    return jogos
}

async function atualizar() {
    const jogos = await jogosRepositories.atualizar()
    return jogos
}

async function deletar() {
    const jogos = await jogosRepositories.deletar()
    return jogos
}

export {
  listar,
  BuscarId,
  Criar,
  atualizar,
  deletar
};

export const JogosServices = new JogosServices()
