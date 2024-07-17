async function listarProductos(){
    const conexion = fetch("http://localhost:3001/productos");

    const conexionConvertida = (await conexion).json();

    return conexionConvertida;
}

async function enviarProducto(titulo,precio,imagen){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            titulo:titulo,
            precio:precio,
            imagen:imagen
        })
    })

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}



async function buscarProductos(palabraClave){
    const conexion = await fetch(`http://localhost:3001/productos?q=${palabraClave}`);
    const conexionConvertida = conexion.json();
    return conexionConvertida
}

export const conexionAPI={
    listarProductos, enviarProducto, buscarProductos
}