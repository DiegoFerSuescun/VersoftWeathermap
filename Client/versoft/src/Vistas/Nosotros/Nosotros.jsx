import React from "react";
import imagen1 from "../../Multimedia/Versoft.webp"
import { NavLink } from "react-router-dom";

export default function Nosotros(props){

    return(
        <div>
            <img src={imagen1} alt="imagen" />
            <h1>Desarrollador</h1>
            <h4>Diego Fernando Suescun Gacheta</h4>
            <h1>Objetivo</h1>
            <h4>Esta pagina permite al usuario buscar su ciudad en una extensa api y de manera organizada proyecta el clima actual en la ciudad deseada, aparte da el reporte de la temperatura en tiempo real y la temperatura mas alta y mas baja esperada en el dia y por ultimo da el reporte del viento que se esta presentando en la ciudad, si no encuentra tu ciudad es intuitiva y te lo indica para que puedas realizar nuevamente la busqueda</h4>
            <h1>Tecnologias</h1>
            <h3>Para la creacion de esta pagina web se utilizaron herramientas tales como Javascript, Reactjs, Redux, React-Redux, Axios, Css, HTML, SWAL2, </h3>
            <NavLink to='/principal'>
            <button>Volver</button>
            </NavLink>

        </div>
    )
};

//Aplicacion V1.0