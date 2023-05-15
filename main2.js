const bienvenida = document.getElementById("general");

function mostrarMensaje() {
  Swal.fire({
    icon: "success",
    title: "Bienvenidos a Gennaro's Pizzas & Empanadas",
    text: "Donde están las mejores Pizzas y Empanadas que vas a probar",
  });

  bienvenida.removeEventListener("click", mostrarMensaje);
}

bienvenida.addEventListener("click", mostrarMensaje);

// CREO LOS PRODUCTOS DE MI COMERCIO EN UN ARRAY
const productosBase = [
  {
    name: "Pizza Muzzarella",
    id: "pi01",
    precio: 950,
  },
  { name: "Pizza Fugazzetta", id: "pi02", precio: 1210 },
  { name: "Pizza Muzzarella y Albahaca", id: "pi03", precio: 1280 },
  { name: "Pizza Muzzarella y Panceta", id: "pi04", precio: 1350 },
  { name: "Pizza Muzzarella y Hongos", id: "pi05", precio: 1400 },
  { name: "Pizza Muzzarella y Longaniza", id: "pi06", precio: 1750 },
  { name: "Pizza Fugazzetta y Longaniza", id: "pi07", precio: 1950 },
  { name: "Empanada Carne", id: "emp01", precio: 250 },
  { name: "Empanada JyQ", id: "emp02", precio: 250 },
  { name: "Coca-Cola Zero", id: "beb01", precio: 870 },
  { name: "Coca-Cola Original", id: "beb02", precio: 850 },
  { name: "7 Up Zero", id: "beb03", precio: 830 },
  { name: "7 Up Original", id: "beb04", precio: 850 },
  { name: "Agua Tonica Schweppes", id: "beb05", precio: 900 },
  { name: "Schweppes Pomelo", id: "beb06", precio: 880 },
  { name: "Cerveza Quilmes", id: "cerv01", precio: 970 },
  { name: "Cerveza Quilmes 1890", id: "cerv02", precio: 990 },
  { name: "Cerveza Quilmes Bock", id: "cerv03", precio: 990 },
  { name: "Cerveza Heineken", id: "cerv04", precio: 1100 },
  { name: "Cerveza Stella", id: "cerv05", precio: 1150 },
];
//CARGA DEL LOCALSTORAGE
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//CALCULO DEL TOTAL DE MI CARRITO DE COMPRAS FINAL
const totalCarritoRender = () => {
  const carritoTotal = document.getElementById("carritoTotal");
  let total = carrito.reduce((acumulador, { precio, cantidad }) => {
    return acumulador + precio * cantidad;
  }, 0);
  carritoTotal.innerHTML = `<b>El total a Pagar es: $ ${total}</b>`;
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
    elementoLista.innerHTML = `<b>Producto:</b>  ${name} / <b>Precio:</b>  ${precio} / <b>Cant.:</b>  ${cantidad} <button id="eliminarCarrito${id}"><b> X </b></button>`;
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
    presentacion.classList.add("col-xl-4", "col-md-6", "col-xp-12");
    presentacion.innerHTML = `
            <div class="card m-2 p-2 " style="width: 20rem;" id="producto${id}">
                <img src="./img/${
                  name + id
                }.png" class="card-img-top flex-row" alt="${name}">
                <div class="card-body flex-center m-5 p-2 ">
                    <h5 class="card-title"> ${name} </h5>
                    <span> <b> Precio por Unidad $ </b> ${precio}</span>
                    <form id="form${id}" class="m-2 p-2">
                        <span><label for="contador${id}"> <b> Cantidad </b> </label></span>
                        <span><input type="number" placeholder="0" id="contador${id}"></span>
                        <span><button class="btn btn-success m-2 center" id="botonProd${id}"> <b> Agregar al Carrito </b></button></span>
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
};

const compraFinal = document.getElementById("botonCompraFinal");
compraFinal.addEventListener("click", () => {
  cerrarCompra();
  Swal.fire({
    icon: "success",
    title: "Felicitaciones!!! Su pedido se ha realizado correctamente.",
    text: "Será enviado a la brevedad. Gracias por confiar en nosotros!!",
  });
});
//
fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json); // Verifica si los datos son recibidos
    const contenedorComentarios = document.getElementById(
      "contenedorComentario"
    );
    const presentacionComentarios = document.createElement("div");
    presentacionComentarios.innerHTML =
      "<h2>Algunas opiniones de nuestros productos</h2>";

    json.forEach((comentario) => {
      const comentarioElemento = document.createElement("div");
      comentarioElemento.innerHTML = `
        <p><b>Usuario:</b> ${comentario.email}</p>
        <p><b>Comentario:</b> ${comentario.body}</p>
      `;

      presentacionComentarios.appendChild(comentarioElemento);
    });

    contenedorComentarios.appendChild(presentacionComentarios);
  })
  .catch((error) => {
    console.error(
      "Disculpe los inconvenientes, pero los comentarios no se han podido visualizar correctamente",
      error
    );
  });

renderizarProductos();
renderizarCarrito();
