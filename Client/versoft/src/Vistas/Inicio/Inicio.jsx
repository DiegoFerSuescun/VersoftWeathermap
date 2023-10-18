import React from "react";
import fondo from "../../Multimedia/Versoft.webp";
import style from "./Inicio.module.css";
import { SpinnerNub } from "../../Componentes/SpinnerNube/Spinner";
import { NavLink } from "react-router-dom";

export default function Inicio(props){

    localStorage.removeItem('Ciudad')
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