function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  return (precio * porcentajePrecioConDescuento) / 100;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("inputDiscount");
  const discountValue = inputDiscount.value;
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const resultado = document.getElementById("result");
  resultado.innerText = "El precio con descuento son: S/" + precioConDescuento;
}
