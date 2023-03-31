alert(" Bienvenidos a Gennaro s Pizzas & Empanadas ");
const producto = prompt(
  "Quiere realizar un pedido de \n a) Pizzas \n b) Empanadas \n c) Bedidas "
);
let cantidadPedida = 0;
const precioPizza = 100;
const precioEmpanada = 20;
const precioBebida = 50;
if (producto == "pizzas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  console.log(`Ud pidio ${totalProducto} ${producto}`);
  let precioProducto = precioPizza;
  netoApagar = totalProducto * precioProducto;
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else if (producto == "empanadas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  console.log(`Ud pidio ${totalProducto} ${producto}`);
  let precioProducto = precioEmpanada;
  netoApagar = totalProducto * precioProducto;
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else if (producto == "bebidas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  console.log(`Ud pidio ${totalProducto} ${producto}`);
  let precioProducto = precioBebida;
  netoApagar = totalProducto * precioProducto;
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else alert("No ha ingresado una opcion valida");
let agregarPedido = true;
while (agregarPedido) {
  const precioPizza = 100;
  const precioEmpanada = 20;
  const precioBebida = 50;
  productoAdicional = prompt(
    "Que desea agrear \n a) Pizzas \n b) Empanadas \n c) Bedidas "
  );
  if (productoAdicional == "pizzas") {
    totalAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    console.log(`Ud agregó ${totalAdicional} ${productoAdicional}`);
    let precioAdicional = precioPizza;
    let precioProducto = precioPizza;
    totalApagar = netoApagar + totalAdicional * precioAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else if (productoAdicional == "empanadas") {
    totalAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    console.log(`Ud agregó ${totalAdicional} ${productoAdicional}`);
    let precioAdicional = precioEmpanada;
    let precioProducto = precioEmpanada;
    totalApagar = netoApagar + totalAdicional * precioAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else if (productoAdicional == "bebidas") {
    totalAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    console.log(`Ud agregó ${totalAdicional} ${productoAdicional}`);
    let precioAdicional = precioBebida;
    precioProducto = precioBebida;
    totalApagar = netoApagar + totalAdicional * precioAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  }
  agregarPedido = confirm("¿Desea agreagar algun producto más?");
}
