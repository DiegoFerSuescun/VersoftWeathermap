# VERSOFT PRUEBA DIEGO SUESCUN

Este proyecto es una muestra de conocimientos de javascript

## Para correr el proyecto:


### solo tienes que abrirlo y hacer el comando `npm start`

Te va a abrir una ventana en tu navegador con la url:
[http://localhost:3000](http://localhost:3000) 


## Acerca de las tecnologias utilizadas para el proyecto:

Este proyecto fue realizado en su totalidad en javascript y utilice tecmologias como, react js, redux, react-redux, HTML, CSS, bootstrap, peticiones axios, sweet alert2, este es la parte del frontend.

## Flujo de el proyecto:

Primero tenemos una barra de navegación `Navbar` donde nuestro usuario puede escribir la ciudad del mundo que desee ver el clima, nuestra aplicacion toma esa accion del boton buscar y se va a las actions de Redux, toma la accion y realiza la peticion dentro de un try catch con el fin del manejo de errores, por ahora cuando tenemos una respuesta adecuada o que sea exitosa, este almacena en el localstorage del navegador la informacion, para oportunidad de mejora se deja todo el montaje del reducer para que cuando haya un backend podamos hacer la peticion a la ruta del backend y podamos almacenar en el reducer la respuesta, por ahora no se dejo asi, para solucionar el tema de almacenaje de elementos, lo mismo sucede con el tema del selector, hay unas ciudades prestablecidas y que funciona su busqueda que con tan solo dar click en el selector va las actions de redux y busca la accion del selector realizando el mismo procedimiento.


## Un poco mas sobre el proyecto

Este proyecto tiene en ciertas partes uso de bootstrap y en otras diseño con css, se que no es lo adecuado pero es una muestra del conocimiento de ambas formas de etilizar.