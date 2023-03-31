alert(" Bienvenidos a Gennaro s Pizzas & Empanadas ");
let nombreUsuario = prompt("Ingrese el nombre de Ususario: ");
let direccionEnvio = prompt("Por favor ingrese la dirirección de envio: ");

const producto = prompt(
  "Quiere realizar un pedido de \n a) Pizzas \n b) Empanadas \n c) Bedidas "
);

let cantidadPedida = 0;
let netoApagar = 0;
let precioProducto = 0;
let precioAdicional = 0;
let totalAdicional = 0;
let totalApagar = 0;

const precioPizza = 100;
const precioEmpanada = 20;
const precioBebida = 50;

if (producto == "pizzas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  netoApagar = totalProducto * precioPizza;
  console.log(
    `Ud pidio ${totalProducto} ${producto}.El monto a abonar es de $ ${netoApagar}`
  );
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else if (producto == "empanadas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  netoApagar = totalProducto * precioEmpanada;
  console.log(
    `Ud pidio ${totalProducto} ${producto}.El monto a abonar es de $ ${netoApagar}`
  );
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else if (producto == "bebidas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  netoApagar = totalProducto * precioBebida;
  console.log(
    `Ud pidio ${totalProducto} ${producto}.El monto a abonar es de $ ${netoApagar}`
  );
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else
  alert(
    "No ha ingresado una opcion valida. Por favor ingrese los item en minúsculas"
  );

let agregarPedido = true;

while (agregarPedido) {
  productoAdicional = prompt(
    "Que desea agrear \n a) Pizzas \n b) Empanadas \n c) Bedidas "
  );
  if (productoAdicional == "pizzas") {
    cantidadAdicional = Number(prompt("Ingrese la cantidad deseada :"));

    totalAdicional = precioPizza * cantidadAdicional;
    console.log(
      `Ud agregó ${cantidadAdicional} ${productoAdicional}. El monto adicional es de $ ${totalAdicional}`
    );
    totalApagar += netoApagar + totalAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else if (productoAdicional == "empanadas") {
    cantidadAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    totalAdicional = precioEmpanada * cantidadAdicional;
    console.log(
      `Ud agregó ${cantidadAdicional} ${productoAdicional}. El monto adicional es de $ ${totalAdicional}`
    );
    totalApagar += netoApagar + totalAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else if (productoAdicional == "bebidas") {
    cantidadAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    totalAdicional = precioBebida * cantidadAdicional;
    console.log(
      `Ud agregó ${cantidadAdicional} ${productoAdicional}. El monto adicional es de $ ${totalAdicional}`
    );
    totalApagar += netoApagar + totalAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  }
  agregarPedido = confirm("¿Desea agreagar algun producto más?");
}
alert(
  `Su pedido ${nombreUsuario} será enviado a la brevedad a ${direccionEnvio}. El total a abonar es de $ ${totalApagar} Muchas gracias por confiar en el sabor y calidad de Gennaros Pizzas & Empanadas`
);
