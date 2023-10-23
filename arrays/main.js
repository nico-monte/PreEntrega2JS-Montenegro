let viajes = [
    { id: 1, ciudad: "paris", precio: 1700 }, 
    { id: 2, ciudad: "londres", precio: 1300 }, 
    { id: 3, ciudad: "montevideo", precio: 700 }, 
    { id: 4, ciudad: "chicago", precio: 2400 }, 
]

let precio = Number(prompt("Ingrese un precio mínimo"));
let filtro = viajes.filter((item) => item.precio > precio);

filtro.forEach((item) => {
    alert(`
    Id: ${item.id}
    Ciudad: ${item.ciudad}
    Precio: ${item.precio}
    `);
});