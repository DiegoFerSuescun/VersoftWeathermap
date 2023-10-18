import React from "react";
import Swal from "sweetalert2";


export default function Tarjeta (props){

    
        const ciudadObj = localStorage.getItem('Ciudad');
        const ciudad= JSON.parse(ciudadObj);

        if (!ciudad){
            return(
                <div>
                    <h1>Busca tu Ciudad</h1>
                </div>
            )
        }
        const {icon, description} = ciudad.weather[0]  //Extraemos de la peticion el icono y la descripcion del clima lo mismo para las coordenadas
        const { lat, lon } = ciudad.coord;  
        const { temp, temp_max, temp_min } = ciudad.main;
        const temperatura = Math.floor(temp - 273.15); 
        const temperaturaMax = Math.floor (temp_max - 273.15);
        const temperaturaMin = Math.floor(temp_min - 273.15);
        const { speed } = ciudad.wind;
        const { country } = ciudad.sys;
           
    return (
        <div>
            <h1>Descripción del clima en la ciudad</h1>
            <h3>{ciudad.name}, {country}</h3>
            <div>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="imagen" />
            <h4>Tipo: {description}</h4>
            <h4>Temperatura: {temperatura} C°</h4>
            <h4>Temperatura Maxima: {temperaturaMax} C°</h4>
            <h4>Temperatura Min: {temperaturaMin} C°</h4>
            <p>Coordenadas</p>
            <h4>Latitud: {lat}</h4>
            <h4>Longitud: {lon}</h4>
            <p>Viento</p>
            <h4>Velocidad: {speed} kms</h4>

            </div>
        </div>
    )
};