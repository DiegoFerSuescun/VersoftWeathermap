import React from "react";
import Swal from "sweetalert2";

export default function Tarjeta(props) {
  const ciudadObj = localStorage.getItem("Ciudad");
  const ciudad = JSON.parse(ciudadObj);

  if (!ciudad) {
    return (
      <div className="container text-center mt-5">
        <h1>Busca tu Ciudad</h1>
      </div>
    );
  }
  const { icon, description } = ciudad.weather[0];
  const { lat, lon } = ciudad.coord;
  const { temp, temp_max, temp_min } = ciudad.main;
  const temperatura = Math.floor(temp - 273.15);
  const temperaturaMax = Math.floor(temp_max - 273.15);
  const temperaturaMin = Math.floor(temp_min - 273.15);
  const { speed } = ciudad.wind;
  const { country } = ciudad.sys;

  return (
    <div className="container mt-5">
      <h1 className="text-center">Descripción del clima en la ciudad</h1>
      <h3 className="text-center">
        {ciudad.name}, {country}
      </h3>
      <div className="text-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="imagen"
          className="img-fluid"
        />
        <h4 className="mt-2">Tipo: {description}</h4>
        <h4>Temperatura: {temperatura} C°</h4>
        <h4>Temperatura Máxima: {temperaturaMax} C°</h4>
        <h4>Temperatura Mínima: {temperaturaMin} C°</h4>
        <p className="mt-4">Coordenadas</p>
        <h4>Latitud: {lat}</h4>
        <h4>Longitud: {lon}</h4>
        <p className="mt-4">Viento</p>
        <h4>Velocidad: {speed} km/h</h4>
      </div>
    </div>
  );
}