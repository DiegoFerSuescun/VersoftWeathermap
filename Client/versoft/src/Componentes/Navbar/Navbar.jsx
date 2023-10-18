import React, { useDebugValue, useState } from "react";
import { useDispatch } from "react-redux";
import { buscarpornombre } from "../../Redux/actions";

export default function Navbar (){

    const dispatch = useDispatch();
    const [ entrada , setEntrada ] = useState('');

    const cambiosin = event => {
        const { value } = event.target;
        setEntrada(value);
       
    };

    const Buscar = event => {
        event.preventDefault();
        dispatch(buscarpornombre(entrada));
    };

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