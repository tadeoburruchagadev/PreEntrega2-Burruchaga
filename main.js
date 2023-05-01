const gorras = [
  {
    modelo: "Gorra 1",
    marca: "Marca 1",
    precio: 500,
  },
  {
    modelo: "Gorra 2",
    marca: "Marca 2",
    precio: 700,
  },
  {
    modelo: "Gorra 3",
    marca: "Marca 3",
    precio: 600,
  },
  {
    modelo: "Gorra 4",
    marca: "Marca 4",
    precio: 800,
  },
];

// El usuario se registra en nuestro sitio web.

let nombre = "";
let apellido = "";

while (
  nombre === "" ||
  nombre === null ||
  apellido === "" ||
  apellido === null
) {
  nombre = prompt("Ingresa tu nombre:");
  apellido = prompt("Ingresa tu apellido:");

  if (
    nombre !== "" &&
    nombre !== null &&
    apellido !== "" &&
    apellido !== null
  ) {
    alert("¡Hola " + nombre + " " + apellido + "!");
  } else {
    alert("Ingrese su nombre y apellido para iniciar la compra.");
  }
}

// Aparece en la pantalla el registro del usuario.

console.log("El cliente se llama: " + nombre + " " + apellido);

// Simulamos nuestro catálogo.

class Gorra {
  constructor(modelo, marca, precio) {
    this.modelo = modelo;
    this.marca = marca;
    this.precio = precio;
    this.informacion = function () {
      console.log(
        "Modelo: " +
          this.modelo +
          "\nMarca: " +
          this.marca +
          "\nPrecio: $" +
          this.precio +
          ".-"
      );
    };
  }
}

const gorra1 = new Gorra("Gorra 1", "Marca 1", 500);

const gorra2 = new Gorra("Gorra 2", "Marca 2", 700);

const gorra3 = new Gorra("Gorra 3", "Marca 3", 600);

const gorra4 = new Gorra("Gorra 4", "Marca 4", 800);

gorra1.informacion();
gorra2.informacion();
gorra3.informacion();
gorra4.informacion();

// El usuario realiza una compra, agregando las gorras que desea.

function carrito() {
  let carrito = [];
  let seguirComprando = true;
  let precios = {
    1: 500,
    2: 700,
    3: 600,
    4: 800,
  };

  while (seguirComprando) {
    let compraGorra = prompt(
      "Elija la opción de la gorra que deseas comprar (1-4): "
    );

    if (compraGorra >= 1 && compraGorra <= 4) {
      carrito.push(compraGorra);

      switch (compraGorra) {
        case "1":
          console.log(
            `El costo de la gorra que deseas comprar es de $${precios[compraGorra]}.-`
          );
          break;
        case "2":
          console.log(
            `El costo de la gorra que deseas comprar es de $${precios[compraGorra]}.-`
          );
          break;
        case "3":
          console.log(
            `El costo de la gorra que deseas comprar es de $${precios[compraGorra]}.-`
          );
          break;
        case "4":
          console.log(
            `El costo de la gorra que deseas comprar es de $${precios[compraGorra]}.-`
          );
          break;
        default:
          console.log("Por favor, ingresa una opción válida.");
          break;
      }

      let respuesta = prompt("¿Deseas agregar más gorras al carrito? (s/n)");
      seguirComprando = respuesta.toLowerCase() === "s";
    } else {
      console.log("Por favor, ingresa una opción válida.");
    }
  }
  let precioTotal = precios[carrito[0]] + precios[carrito[1]];
  console.log(
    nombre +
      " " +
      apellido +
      ", el costo total de tu compra es de $" +
      precioTotal +
      ".-"
  );
}
