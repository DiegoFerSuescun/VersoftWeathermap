import React, { useDebugValue, useState } from "react";
import { useDispatch } from "react-redux";


export default function Navbar (){

    const dispatch = useDispatch();
    const [ entrada , setEntrada ] = useState('');

    const cambiosin = event => {
        const { value } = event.target;
        setEntrada(value);
        // console.log('Esta es la entrada ', entrada); // Prueba de la entrada en el input para buscar la ciduad 
    };

    const Buscar = event => {
        event.preventDefault();
        // dispatch(BuscarPorNombre(entrada));
        console.log(entrada);
    }
    return(
        <div>
            <input type="search" 
            name="search"
            id="search"
            value={entrada}
            onChange={cambiosin}
            placeholder="Buscar Ciudad"
            />
            <button type="submit" onClick={(event) => Buscar(event)}>Buscar</button>
        </div>
    )
};


// La Navbar es la barra en la que vamos a realizar la busqueda de las ciudades segun la que quiera buscar el usuario.