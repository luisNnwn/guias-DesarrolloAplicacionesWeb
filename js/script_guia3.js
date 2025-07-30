// ========================
// REFERENCIAS DEL DOM
// ========================
const mensaje = document.getElementById("mensaje");
const btnCambiar = document.getElementById("btnCambiar");
const inputNombre = document.getElementById("nombre");
const btnSaludar = document.getElementById("btnSaludar");
const saludo = document.getElementById("saludo");
const advertencia = document.getElementById("advertencia");
const btnRestablecer = document.getElementById("btnRestablecer");
const imagen = document.getElementById("imagen");
const btnImagen = document.getElementById("btnImagen");

// ========================
// CAMBIAR MENSAJE AL HACER CLIC
// ========================
btnCambiar.addEventListener("click", () => {
  mensaje.textContent = "¡El mensaje ha cambiado!"; // Cambia el texto
  mensaje.style.color = "purple"; // Cambia color
  mensaje.style.fontSize = "24px"; // Cambia tamaño
});

// ========================
// SALUDAR CON NOMBRE
// ========================
btnSaludar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim(); // Quita espacios extra

  if (nombre === "") {
    // Si no hay texto, mostrar advertencia
    advertencia.style.display = "block";
    saludo.textContent = "";
  } else {
    // Si hay nombre, mostrar saludo personalizado
    advertencia.style.display = "none";
    saludo.textContent = `¡Hola, ${nombre}! Bienvenido.`;
  }
});

// ========================
// RESTABLECER PÁGINA A ESTADO INICIAL
// ========================
btnRestablecer.addEventListener("click", () => {
  mensaje.textContent = "Este es un mensaje inicial.";
  mensaje.style.color = "#34495e";
  mensaje.style.fontSize = "20px";
  saludo.textContent = "";
  advertencia.style.display = "none";
  inputNombre.value = "";
});

// ========================
// MOSTRAR/OCULTAR IMAGEN
// ========================
btnImagen.addEventListener("click", () => {
  // Alterna entre ocultar y mostrar
  imagen.style.display = (imagen.style.display === "none") ? "block" : "none";
});

// ========================
// CAMBIO AUTOMÁTICO DE MENSAJE TRAS 3 SEGUNDOS
// ========================
setTimeout(() => {
  mensaje.textContent = "Este mensaje cambió automáticamente después de 3 segundos.";
  mensaje.style.color = "orange";
}, 3000);
