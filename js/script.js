// Obtener referencia al campo de entrada de teléfono
const phoneInput = document.getElementById("phone");

// Agregar un listener para el evento "input"
phoneInput.addEventListener("input", function (event) {
  // Obtener el valor ingresado por el usuario
const inputValue = event.target.value;

  // Expresión regular que permite solo dígitos numéricos
const numericRegex = /^\d*$/;

  // Validar si el valor ingresado no contiene solo dígitos numéricos
if (!numericRegex.test(inputValue)) {
    // Si contiene caracteres no numéricos, eliminarlos del valor
    event.target.value = inputValue.replace(/\D/g, "");
}
});
