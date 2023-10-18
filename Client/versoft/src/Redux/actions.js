import axios from "axios";
import { BUSCARPORNOMBRE, ERRORNOMBRE } from "./types"; //Primero crear las acciones en el archivo types.js y luego si traerlas acá.
import Swal from "sweetalert2";


const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=c8b221c3581dc8bf0585f236e966edd3&lang=es' //! URL General para buscar por nombre en tiempo real
const ciudad = '&q=';//! Toca agregar esto porque es del formato de la api para poder hacer la busqueda
const prediccion = 'https://api.openweathermap.org/data/2.5/forecast?appid=c8b221c3581dc8bf0585f236e966edd3&lang=es' //!Este es para la prediccion del clima


export const buscarpornombre = (nombreciudad) => {
    return async (dispatch) => {
        const busqueda = URL + ciudad + nombreciudad;
        try {
            const { data } = await axios.get(busqueda);
            if(data){
                localStorage.setItem('Ciudad', JSON.stringify(data)); // guardamos la ciudad buscada en el localstorage
                window.location.reload();
            }
            return dispatch({
                type: BUSCARPORNOMBRE,
                payload: data
            })
        } catch (error) {
            localStorage.removeItem('Ciudad');
            // window.location.reload();
            Swal.fire({
                icon:'error',
                title: 'Ooopss!!!',
                text: "No encontramos tu ciudad"
            }).then(()=> {
                window.location.reload();
            })
        }
    }
};


