import pg from "./database/knex.js"
import {knex} from "../database/knex.js";


async function listar() {
  return await db("jogos").select("*");
}

async function BuscarId(id){
    return await db("jogos").select(id)
}

async function atualizar(id, dado){
    const [jogoAtualizado] = await knex("jogos")
    .where({id})
    .update(dado)
    .returning("*");

  return jogoAtualizado;
}

async function criar(dado){

}

async function deletar(id) {

    
}

export {
  listar,
  BuscarId,
  criar,
  atualizar,
  deletar
};

export const jogosRepositories = new JogosRepositories();