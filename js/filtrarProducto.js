import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarProductos.js";

async function filtrarProducto(evento){

    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;

    const busqueda = await conexionAPI.buscarProductos(datosDeBusqueda);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(producto=>lista.appendChild(crearCard(producto.titulo, producto.precio,producto.imagen)));

}


const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>filtrarProducto(evento));