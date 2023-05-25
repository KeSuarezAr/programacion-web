function calcularFechas(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const dias = document.getElementById("dias").value;
  const llegada = new Date(fecha);
  const salida = new Date(llegada.getTime() + dias * 24 * 60 * 60 * 1000);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const llegadaFormateada = llegada.toLocaleDateString("es-ES", options);
  const salidaFormateada = salida.toLocaleDateString("es-ES", options);

  if (nombre === "") {
    alert("Por favor inserte su Nombre");
    return;
  } else if (fecha === "") {
    alert("Por favor inserte una Fecha");
    return;
  } else if (fecha < new Date().toISOString().split("T")[0]) {
    alert("Por favor inserte una Fecha válida");
    return;
  }

  document.getElementById(
    "greet"
  ).textContent = `Hola ${nombre}, tu reservacion se genero exitosamente.`;

  document.getElementById(
    "fechaEntrada"
  ).textContent = `Fecha de llegada: ${llegadaFormateada}`;

  document.getElementById(
    "fechaSalida"
  ).textContent = `Fecha de salida: ${salidaFormateada}`;

  document.getElementById(
    "dias"
  ).textContent = `Número de días: ${dias}`;
}
