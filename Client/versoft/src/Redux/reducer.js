import { BUSCARPORNOMBRE, ERRORNOMBRE, BUSCARPORSELECTOR } from "./types";


const estadoInicial = {
    estadoCiudad: []
};

export default function reducer (estado = estadoInicial, {type, payload}){

    switch (type) {
        case BUSCARPORNOMBRE:
            return {
                ...estado,
                estadoCiudad: payload
            };
        case ERRORNOMBRE:
            return {
                ...estado,
                estadoCiudad: payload
            };
        case BUSCARPORSELECTOR:
            return {
                ...estado,
                estadoCiudad: payload
            }
    
        default:
            break;
    }
};