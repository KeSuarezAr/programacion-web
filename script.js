function calcularFechas(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const llegada = new Date(fecha);
  const salida = new Date(llegada.getTime() + 7 * 24 * 60 * 60 * 1000);
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

  const greetElement = document.createElement("p");
  greetElement.textContent = `Hola ${nombre}, tu reservacion se genero exitosamente.`;
  document.getElementById("fechas").appendChild(greetElement);

  const fechas = { llegada: llegadaFormateada, salida: salidaFormateada };

  const llegadaElement = document.createElement("p");
  llegadaElement.textContent = `Llegada: ${fechas.llegada}`;
  document.getElementById("fechas").appendChild(llegadaElement);

  const salidaElement = document.createElement("p");
  salidaElement.textContent = `Salida: ${fechas.salida}`;
  document.getElementById("fechas").appendChild(salidaElement);
}