alert(" Bienvenidos a Gennaro s Pizzas & Empanadas ");
let nombreUsuario = prompt("Ingrese el nombre de Ususario: ");
let direccionEnvio = prompt("Por favor ingrese la dirirección de envio: ");
class Producto {
  constructor(nombre, precio, costoEnvio) {
    this.nombre = nombre;
    this.precio = precio;
    this.costoEnvio = costoEnvio;
  }
}

const pizzas = new Producto("Pizzas", 100, 20);
const empanadas = new Producto("Empanadas", 20, 4);
const bebidas = new Producto("Bebidas", 50, 10);

const arrayProductos = [pizzas, empanadas, bebidas];
console.log(arrayProductos);

const seccionProductos = document.getElementById("seccionProductos");
arrayProductos.forEach((producto) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>Nuestras ${producto.nombre}</p>
  <p> Precio: $ ${producto.precio}</p>`;
  seccionProductos.appendChild(div);
});
const producto = prompt(
  "Quiere realizar un pedido de \n a) Pizzas \n b) Empanadas \n c) Bedidas "
);

let cantidadPedida = 0;
let netoApagar = 0;
let precioProducto = 0;
let precioAdicional = 0;
let totalAdicional = 0;
let totalApagar = 0;

if (producto == "pizzas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  netoApagar = totalProducto * arrayProductos[0].precio;
  console.log(
    `Ud pidio ${totalProducto} ${producto}.El monto a abonar es de $ ${netoApagar}`
  );
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else if (producto == "empanadas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  netoApagar = totalProducto * arrayProductos[1].precio;
  console.log(
    `Ud pidio ${totalProducto} ${producto}.El monto a abonar es de $ ${netoApagar}`
  );
  alert(`El monto a abonar es de $ ${netoApagar}`);
} else if (producto == "bebidas") {
  totalProducto = Number(prompt("Ingrese la cantidad deseada :"));
  netoApagar = totalProducto * arrayProductos[2].precio;
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

    totalAdicional = arrayProductos[0].precio * cantidadAdicional;
    console.log(
      `Ud agregó ${cantidadAdicional} ${productoAdicional}. El monto adicional es de $ ${totalAdicional}`
    );
    totalApagar += netoApagar + totalAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else if (productoAdicional == "empanadas") {
    cantidadAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    totalAdicional = arrayProductos[1].precio * cantidadAdicional;
    console.log(
      `Ud agregó ${cantidadAdicional} ${productoAdicional}. El monto adicional es de $ ${totalAdicional}`
    );
    totalApagar += netoApagar + totalAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else if (productoAdicional == "bebidas") {
    cantidadAdicional = Number(prompt("Ingrese la cantidad deseada :"));
    totalAdicional = arrayProductos[2].precio * cantidadAdicional;
    console.log(
      `Ud agregó ${cantidadAdicional} ${productoAdicional}. El monto adicional es de $ ${totalAdicional}`
    );
    totalApagar += netoApagar + totalAdicional;
    alert(`El monto a abonar es de $ ${totalApagar}`);
  } else
    alert(
      "No ha ingresado una opcion valida. Por favor ingrese los item en minúsculas"
    );
  agregarPedido = confirm("¿Desea agreagar algun producto más?");
}
if (totalApagar >= 350) {
  alert(`El costo de envio es gratuito`);
} else {
  let precioFinal = arrayProductos.reduce(
    (acumulador, elemento) => acumulador + elemento.costoEnvio,
    0
  );
  totalApagar = totalApagar + precioFinal;
  console.log(precioFinal);
}
alert(
  `Su pedido ${nombreUsuario} será enviado a la brevedad a ${direccionEnvio}. El total a abonar es de $ ${totalApagar} Muchas gracias por confiar en el sabor y calidad de Gennaros Pizzas & Empanadas`
);
