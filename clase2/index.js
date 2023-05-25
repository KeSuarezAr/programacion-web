var num1, num2;

function onChange() {
  num1 = parseInt(document.getElementById("numero1").value);
  num2 = parseInt(document.getElementById("numero2").value);
}

function onChangeEdad() {
  const fecha = document.getElementById("fecha").value;
  const edad = new Date(Date.now() - new Date(fecha).getTime());
  const years = edad.getUTCFullYear() - 1970;

  document.getElementById("edad").textContent = `Edad: ${years} años`;
}

function suma(numero1, numero2) {
  if (!num1 || !num2) return;

  alert(`La suma da: ${num1 + num2}`);
}

function mayor() {
  if (!num1 || !num2) return;

  const max = Math.max(num1, num2);

  alert(`${max} es el Mayor`);
}
