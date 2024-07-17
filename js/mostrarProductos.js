import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(titulo,precio,imagen){
    const producto = document.createElement("li");
    producto.className="productos__item";
    producto.innerHTML=`<img class="imagen-producto" src="${imagen}" alt="">
            <div class="descripcion-producto">
                <h3 class="nombre-producto">${titulo}</h3>
                <p>$${precio}</p>
            </div>`

    return producto;
}

async function listarProductos(){
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.titulo,producto.precio,producto.imagen)))

}

listarProductos()