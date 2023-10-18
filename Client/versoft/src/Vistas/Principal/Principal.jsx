import React, { useState } from "react";
import Navbar from "../../Componentes/Navbar/Navbar";
import Tarjeta from "../../Componentes/Tarjeta/Tarjeta";

export default function Principal(props){
    const [ ciudadAct, setciudadaAct ] = useState(null); //Estado para controlar la actualizacion de la ciudad cuando realizamos nuevas busquedas
   
    

    return(
        <div>
            <Navbar setCiudadAct={setciudadaAct} />
            <Tarjeta ciudadAct={ciudadAct} />
        </div>
    )
};