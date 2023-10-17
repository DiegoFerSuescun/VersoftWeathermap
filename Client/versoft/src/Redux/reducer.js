import { BUSCARPORNOMBRE } from "./types";


const estadoInicial = {
    estadoCidudad: []
};

export default function reducer (estado = estadoInicial, {tipo, payload}){

    switch (tipo) {
        case BUSCARPORNOMBRE:
            return {
                ...estado,
                estadoCidudad: payload
            }
            
            break;
    
        default:
            break;
    }
};