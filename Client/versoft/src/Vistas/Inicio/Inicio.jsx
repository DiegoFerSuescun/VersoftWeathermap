import React from "react";
import fondo from "../../Multimedia/Versoft.webp";
import style from "./Inicio.module.css"; // Todo el estilado css viene del module.css de esta misma carpeta.
import { SpinnerNub } from "../../Componentes/SpinnerNube/Spinner";
import { NavLink } from "react-router-dom";

export default function Inicio(props){

    localStorage.removeItem('Ciudad') //!Limpia el storage para que nuestra primera imagen sea limpia, pero si se desea guardar la ultima busqueda borrar esta linea.
    return(
        <div>
            <SpinnerNub />
            <h1 className={style.contenido}>Bienvenido a tu reporte del clima</h1>
            <img src={fondo} alt="Imagen"/>  
            <div>
            <NavLink to='/principal'>
            <button className={style.botonIngreso}>Ingresar</button>
            </NavLink>
            </div>
           
        </div>
    )
};

//!Por ahora solo trae un mensaje pero para poder sacar mas provecho de la vista se puede realizar una pagina de inicio de sesión.
//! un login con firebase para poder usar google o telefono etc...
//!Todas las imagenes estan en la carpet Multimedia ospedad en src.