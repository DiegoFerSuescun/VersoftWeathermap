import React from "react";
import style from "./Spinner.module.css";

export const SpinnerNub = () => {
    return(
        <div className={style.cloudRainSpinner}>
            <div className={style.cloud}></div>
            <div className={style.cloud2}></div>
            
        </div>
    )
}