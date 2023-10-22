import React from "react";
import style from "./Spinner.module.css";

export const SpinnerNub = () => {
    return(
        <div className={style.cloudRainSpinner}>
            <div className={style.cloud}></div>
            <div className={style.cloud2}></div>
            
        </div>
    )
};


//! Solo es un spinner, que se utiliza en la pantalla de inicio, si se desea estilizar mas se puede en el archivo Spinner.module.css de esta misma carpeta.