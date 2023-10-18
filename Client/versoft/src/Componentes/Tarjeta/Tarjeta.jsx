import React from "react";


export default function Tarjeta (props){

    
        const ciudadObj = localStorage.getItem('Ciudad');
        const ciudad= JSON.parse(ciudadObj);
        const {icon, description} = ciudad.weather[0]
        const { lat, lon } = ciudad.coord;
        const { temp, temp_max, temp_min } = ciudad.main;
        const temperatura = temp - 273.15;
        const temperaturaMax = temp_max - 273.15;
        const temperaturaMin = temp_min - 273.15;
           
    return (
        <div>
            <h1>Descripción del clima en la ciudad</h1>
            <h3>{ciudad.name}</h3>
            <div>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="imagen" />
            <h4>Tipo: {description}</h4>
            <h4>Temperatura: {temperatura} C°</h4>
            <h4>Temperatura Maxima: {temperaturaMax} C°</h4>
            <h4>Temperatura Min: {temperaturaMin} C°</h4>

            <p>Coordenadas</p>
            <h4>Latitud: {lat}</h4>
            <h4>Longitud: {lon}</h4>

            </div>
        </div>
    )
};