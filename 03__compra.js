// Vamos a comprar una determinada cantidad de un artículo y sabemos el precio de cada uno.
// Queremos obtener la cantidad total a pagar
const bricksLeche = 3;
const precioBrickLeche = 1.25;

// console.log(`El importe a pagar son ${bricksLeche * precioBrickLeche}`);

const articulo = [bricksLeche, precioBrickLeche];
//                      0               1

// console.log(`El importe a pagar son ${articulo[0] * articulo[1]}`);

const articulos = ["leche", "huevos", "sal", "harina", "azucar"];
const cantidades = [2, 1, 1, 3, 1];
const precios = [1.25, 3.25, 0.9, 0.78, 1.5];

// Queremos obtener algo parecido a un recibo, así:
// Leche: 2 x 1.25 = 2.50€

let totalCompra = 0;
for (let i = 0; i < articulos.length; i++) {
  // console.log(articulos[i]);
  // console.log(cantidades[i]);
  // console.log(precios[i]);
  let parcialCompra = cantidades[i] * precios[i];
  totalCompra += parcialCompra;
  let mensaje = `${articulos[i]}: ${cantidades[i]} x ${precios[i]} = ${parcialCompra}€`;
  console.log(mensaje);
}
console.log(`Importe total : ${totalCompra}€`);
// totalCompra

let carroCompra = [];
let articuloComprado = { nombreProducto: "leche", cantidad: 2, precio: 1.25 };
carroCompra.push(articuloComprado);
console.log(carroCompra);
articuloComprado = { nombreProducto: "huevos", cantidad: 1, precio: 3.25 };
carroCompra.push(articuloComprado);
console.log(carroCompra);
articuloComprado = { nombreProducto: "sal", cantidad: 1, precio: 0.9 };
carroCompra.push(articuloComprado);

for (producto of carroCompra) {
  let parcialCompra = producto["cantidad"] * producto["precio"];
  let textoCompraParcial = `${producto["nombreProducto"]}: ${producto["cantidad"]} x ${producto["precio"]} = ${parcialCompra}€`;
  console.log(textoCompraParcial);
}
