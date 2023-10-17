import axios from "axios";
import { BUSCARPORNOMBRE } from "./types"; //Primero crear las acciones en el archivo types.js y luego si traerlas acá.


export const buscarpornombre = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(``)
        } catch (error) {
            
        }
    }
}