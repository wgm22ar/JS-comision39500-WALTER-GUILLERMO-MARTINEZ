// CREO LPOS PRODUCTOS DE MI COMERCIO EN UN ARRAY
const productosBase = [
  {
    name: "Pizza Muzzarella",
    id: "pi01",
    precio: 950,
  },
  { name: "Pizza Fugazzetta", id: "pi02", precio: 1210 },
  { name: "Empanada Carne", id: "emp01", precio: 250 },
  { name: "Empanada JyQ", id: "emp02", precio: 250 },
  { name: "Coca-Cola", id: "beb01", precio: 870 },
  { name: "Cerveza Quilmes", id: "cerv01", precio: 970 },
];
//CARGA DEL LOCALSTORAGE
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//CALCULO DEL TOTAL DE MI CARRITO DE COMPRAS FINAL
const totalCarritoRender = () => {
  const carritoTotal = document.getElementById("carritoTotal");
  let total = carrito.reduce((acumulador, { precio, cantidad }) => {
    return acumulador + precio * cantidad;
  }, 0);
  carritoTotal.innerHTML = `El total a Pagar es: $ ${total}`;
};

const agregarCarrito = (objetoCarrito) => {
  carrito.push(objetoCarrito);
  totalCarritoRender();
};

const renderizarCarrito = () => {
  const listaCarrito = document.getElementById("listaCarrito");
  listaCarrito.innerHTML = "";
  carrito.forEach(({ name, precio, id, cantidad }) => {
    let elementoLista = document.createElement("li");
    elementoLista.innerHTML = `Producto:${name} / Precio: ${precio} / Cant.:${cantidad} <button id="eliminarCarrito${id}">X</button>`;
    listaCarrito.appendChild(elementoLista);
    const botonBorrar = document.getElementById(`eliminarCarrito${id}`);
    botonBorrar.addEventListener("click", () => {
      carrito = carrito.filter((elemento) => {
        if (elemento.id !== id) {
          return elemento;
        }
      });
      let carritoString = JSON.stringify(carrito);
      localStorage.setItem("carrito", carritoString);
      renderizarCarrito();
    });
    let carritoString = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoString);
  });
};

const borrarCarrito = () => {
  carrito = [];
  let carritoString = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoString);
  renderizarCarrito();
};

const renderizarProductos = () => {
  // OPERACION DEL DOM DE LOS PRODUCTOS

  const contenedorProductos = document.getElementById("contenedorProductos");
  productosBase.forEach(({ name, id, precio }) => {
    const presentacion = document.createElement("div");
    presentacion.innerHTML = `
            <div class="card m-2 p-2 " style="width: 20rem;" id="producto${id}">
                <img src="./img/${
                  name + id
                }.png" class="card-img-top flex-row" alt="${name}">
                <div class="card-body flex-center m-5 p-2 ">
                    <h5 class="card-title">${name}</h5>
                    <span>Precio por Unidad $ ${precio}</span>
                    <form id="form${id}" class="m-2 p-2">
                        <label for="contador${id}">Cantidad</label>
                        <input type="number" placeholder="0" id="contador${id}">
                        <button class="btn btn-success m-2 center" id="botonProd${id}">Agregar</button>
                    </form>
                </div>
            </div>`;
    contenedorProductos.appendChild(presentacion);
    const btn = document.getElementById(`botonProd${id}`);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const totalCantidaProductos = Number(
        document.getElementById(`contador${id}`).value
      );
      if (totalCantidaProductos > 0) {
        agregarCarrito({
          name,
          id,
          precio,
          cantidad: totalCantidaProductos,
        });
        renderizarCarrito();
        const form = document.getElementById(`form${id}`);
        form.reset();
      }
    });
  });
};
//   FINALIZACION DE LA COMPRA
const cerrarCompra = () => {
  borrarCarrito();
  let mensaje = document.getElementById("carritoTotal");
  mensaje.innerHTML =
    "Su pedido será enviado a la brevedad. Muchas gracias por confiar en el sabor y calidad de Gennaros Pizzas & Empanadas";
};

const compraFinal = document.getElementById("botonCompraFinal");
compraFinal.addEventListener("click", () => {
  cerrarCompra();
});

renderizarProductos();
renderizarCarrito();
