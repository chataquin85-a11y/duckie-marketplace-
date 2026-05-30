// Prueba de vida del script
console.log("¡El script.js se ha cargado correctamente!");

// Verificar si Firebase está inicializado
try {
  const auth = firebase.auth();
  console.log("Firebase Auth está listo.");
} catch (error) {
  console.error("Error al conectar con Firebase:", error);
}
