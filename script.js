// 1. Importar los servicios que necesitamos desde la plataforma de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 2. Tus credenciales exclusivas de duckie-marketplace
const firebaseConfig = {
  apiKey: "AIzaSyDnZsPa7B3_V0igV6FbyySUY6Sdl6vqq2E",
  authDomain: "duckie-marketplace.firebaseapp.com",
  projectId: "duckie-marketplace",
  storageBucket: "duckie-marketplace.firebasestorage.app",
  messagingSenderId: "420270054054",
  appId: "1:420270054054:web:f13a3c50533a14f3f47267"
};

// 3. Inicializar Firebase y el motor de Autenticación
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lista de productos de tu inventario

const productos = [
  {
    nombre: "NutriBullet",
    precio: "$50.00",
    descripcion: "Procesador de alimentos en excelente estado.",
    imagen: "https://via.placeholder.com/150" // Aquí pondremos tu enlace real de ImgBB más adelante
  },
  {
    nombre: "Prenda de Ropa de Marca",
    precio: "$25.00",
    descripcion: "Ropa de marca original, como nueva.",
    imagen: "https://via.placeholder.com/150" // Aquí pondremos tu enlace real de ImgBB más adelante
  }
];

// Función para mostrar los productos en la página web
function cargarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  if (!contenedor) return;

  contenedor.innerHTML = ""; // Limpiar contenedor

  productos.forEach(producto => {
    // Crear la tarjeta del producto
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-producto";

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p class="precio">${producto.precio}</p>
      <button style="background: #28a745; color: white; border: none; padding: 10px; border-radius: 4px; cursor: pointer; width: 100%;">Comprar</button>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// Ejecutar la función cuando la página termine de cargar
document.addEventListener("DOMContentLoaded", cargarProductos);
