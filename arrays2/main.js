let viajes = [
    { id: 1, ciudad: "paris", precio: 1700 }, 
    { id: 2, ciudad: "londres", precio: 1350 }, 
    { id: 3, ciudad: "montevideo", precio: 700 }, 
    { id: 4, ciudad: "chicago", precio: 2400 }, 
]

let ciudad = prompt("Ingrese destino que quiera buscar"); 
let encontrado = viajes.find((item) => item.ciudad === ciudad);

if (encontrado) {
    alert(`
    Id: ${encontrado.id}
    Ciudad: ${encontrado.ciudad}
    Precio: ${encontrado.precio}
    `);
} else {
    alert("El destino buscado no está disponible")
}