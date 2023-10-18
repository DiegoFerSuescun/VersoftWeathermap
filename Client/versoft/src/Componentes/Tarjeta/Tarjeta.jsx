import React from "react";


export default function Tarjeta (props){

    
        const ciudadObj = localStorage.getItem('Ciudad');
        const ciudad= JSON.parse(ciudadObj);
        console.log(ciudad.weather[0]);
   


    

    
    return (
        <div>
            
        </div>
    )
};