import { Pool } from "undici-types";
import {jogosRepositories} from "../repositories/jogo.repositories.js";


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



export const JogosServices = new JogosServices()
