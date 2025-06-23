precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const agregarBtn = document.querySelector("#agregar");
const quitarBtn = document.querySelector("#quitar");

let cantidad = 0;

agregarBtn.onclick = () => {
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = precio * cantidad;
}
quitarBtn.onclick = () => {
    if (cantidad > 0)
    cantidad = cantidad - 1;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = precio * cantidad;
}