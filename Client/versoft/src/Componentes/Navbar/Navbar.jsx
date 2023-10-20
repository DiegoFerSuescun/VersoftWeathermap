import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { buscarpornombre, buscarporselector, buscarporselectorpais } from "../../Redux/actions";

export default function Navbar ( { setciudadaAct }){

    const dispatch = useDispatch();
    const [ entrada , setEntrada ] = useState('');
    const [ selectorCiudad, setSelectorCiudad ] = useState('DEFAULT'); // Para poder actualizar cuando hacemos una seleccion de ciudad 
    const [ selectorPais, setSelectorPais ] = useState('DEFAULT');

    const cambiosin = event => {
        const { value } = event.target;
        setEntrada(value);
       
    };

    const Buscar = async (event) => {
        dispatch(buscarpornombre(entrada));
        
        setEntrada("");
    };

    const Selector = async (event) =>{
        const { value } = event.target;
        setSelectorCiudad(value);
        dispatch(buscarporselector(value))
    };

    const SelectorPais = async (event) =>{
        const { value } = event.target;
        setSelectorPais(value);
        dispatch(buscarporselectorpais(value))
    }

    return(
        <div>
            <div>
                <input type="search" 
                name="search"
                id="search"
                value={entrada}
                onChange={cambiosin}
                placeholder="Buscar Ciudad"
                />
                <button type="submit" onClick={(event) => Buscar(event)}>Buscar</button>
            </div>
            <div>
                <select name="ciudad" id="ciudad" value={selectorCiudad} onChange={((event) =>Selector(event))}>
                    <option value="DEFAULT" disabled hidden> Ciudad</option>
                    <option value="Bogota">Bogota, Co</option>
                    <option value="Buenos Aires"> Buenos Aires, Ar</option>
                    <option value="Brazilia">Brasília, Br</option>
                    <option value="Montevideo">Montevideo, UY</option>
                    <option value="Quito">Quito, Ec</option>
                    <option value="Santiago">Santiago de chile, CL</option>
                    <option value="Caracas">Caracas, Ve</option>
                    <option value="Asuncion">Asuncion, Py</option>
                    <option value="Sucre">Sucre, Bo</option>
                    <option value="Lima">Lima, Pe</option>
                    <option value="San salvador">San Salvador, Sv</option>
                    <option value="Roseau">Roseau, Dm</option>
                    <option value="Washington">Washington, Us</option>
                    <option value="Guatemala City">Ciudad de guatemala, Gt</option>
                    <option value="Tegucigalpa">Tegucigalpa, Hn</option>
                    <option value="Kingston">Kingston, Jm</option>
                    <option value="Mexico City">Ciudad de Mexico, Mx</option>
                    <option value="Managua">Managua, Ni</option>
                    <option value="Panama">Panama, Pa</option>
                    <option value="Santo Domingo">Santo Domingo, Do</option>
                    
                </select>
                <select name="paises" id="paises" value={selectorPais} onChange={(event) => SelectorPais(event)}>
                    <option value="DEFAULT" disabled hidden>Pais</option>
                    <option value="Colombia" >Colombia</option>
                    <option value="Argentina" >Argentina</option>
                    <option value="Peru" >Peru</option>
                    <option value="Brasil" >Brasil</option>
                    <option value="Cuba" >Cuba</option>
                    <option value="Venezuela" >Venezuela</option>
                    <option value="Paraguay" >Paraguay</option>
                    <option value="Uruguay" >Uruaguay</option>
                </select>
            </div>
        </div>
    )
};


// La Navbar es la barra en la que vamos a realizar la busqueda de las ciudades segun la que quiera buscar el usuario.