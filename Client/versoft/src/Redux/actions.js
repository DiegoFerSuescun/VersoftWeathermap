import axios from "axios";
import { BUSCARPORNOMBRE } from "./types"; //Primero crear las acciones en el archivo types.js y luego si traerlas acá.

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=c8b221c3581dc8bf0585f236e966edd3&lang=es'
const ciudad = '&q=';
const prediccion = 'https://api.openweathermap.org/data/2.5/forecast?appid=c8b221c3581dc8bf0585f236e966edd3&lang=es'


export const buscarpornombre = (nombreciudad) => {
    return async (dispatch) => {
        const busqueda = URL + ciudad + nombreciudad;
        try {
            const { data } = await axios.get(busqueda);
            console.log('Fue exitoso: ', data);
            return dispatch({
                type: BUSCARPORNOMBRE,
                payload: data
            })
        } catch (error) {
            console.log('No se puedo ', error);
        }
    }
}