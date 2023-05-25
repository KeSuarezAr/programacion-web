function calcularFechas() {
  const nombre = document.getElementById("nombre").value;
  const fecha = document.getElementById("fecha").value;
  const llegada = new Date(fecha);
  const salida = new Date(llegada.getTime() + 7 * 24 * 60 * 60 * 1000);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const llegadaFormateada = llegada.toLocaleDateString("es-ES", options);
  const salidaFormateada = salida.toLocaleDateString("es-ES", options);

  document.getElementById(
    "fechas"
  ).textContent = `Hola ${nombre}, tu reserva es del ${llegadaFormateada} al ${salidaFormateada}.`;
}
