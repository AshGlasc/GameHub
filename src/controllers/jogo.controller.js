
import {JogosServices} from "../services/jogo.service.js";

listar(req, res) 
    try {
        const jogos = await JogosServices(listar)
        res.json(jogos)
    } catch(error){
}

export const jogoController = new JogosController()