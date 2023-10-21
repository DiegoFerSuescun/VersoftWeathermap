import React from "react";
import imagen1 from "../../Multimedia/Versoft.webp";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nosotros(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <img src={imagen1} alt="imagen" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Desarrollador</h1>
              <h4>Diego Fernando Suescun Gacheta</h4>
              <h1 className="card-title">Objetivo</h1>
              <p>
                Esta página permite al usuario buscar su ciudad en una extensa API
                y de manera organizada proyecta el clima actual en la ciudad
                deseada, además da el reporte de la temperatura en tiempo real y la
                temperatura más alta y más baja esperada en el día. Por último, da el
                reporte del viento que se está presentando en la ciudad. Si no
                encuentra tu ciudad, es intuitiva y te lo indica para que puedas
                realizar nuevamente la búsqueda.
              </p>
              <h1 className="card-title">Tecnologías</h1>
              <p>
                Para la creación de esta página web se utilizaron herramientas tales
                como Javascript, Reactjs, Redux, React-Redux, Axios, CSS, HTML, SWAL2.
              </p>
              <NavLink to="/principal">
                <button className="btn btn-primary btn-lg">Volver</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//!Todas las imagenes estan en la carpet Multimedia ospedad en src.
//! Por ahora solo trae una breve leyenada pero se puede complementar con imagenes de la empresa, del clima, de la api etc.
//! El boton "Volver" funciona con un componente de react-router-dom, se podria hacer un handler para que en su propiedad onclick se active y nos envie a la pantalla principal.
//! Por ahora esta vista no trae archivo module.css ya que es un trabajo con bootstrap.
