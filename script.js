// 1. Listado de productos en tu inventario
const products = [
    {
        titulo: "NutriBullet",
        price: "$50.00",
        description: "Food processor in excellent condition.",
        image: "https://via.placeholder.com/150"
    },
    {
        titulo: "Designer Clothing Item",
        price: "$25.00",
        description: "Original brand-name clothing, like new.",
        image: "https://via.placeholder.com/150"
    }
];

// 2. Función para mostrar los productos automáticamente en la tienda
function loadProducts() {
    // Busca exactamente el contenedor que tienes en tu index.html
    const container = document.getElementById("contenedor-productos");
    if (!container) return;

    container.innerHTML = ""; // Limpiar el espacio viejo

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style = "border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px; text-align: center; width: 200px; background: white; color: black;";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.titulo}" style="max-width: 100%; height: auto;">
            <h3>${product.titulo}</h3>
            <p>${product.description}</p>
            <p class="price" style="font-weight: bold; color: #28a745;">${product.price}</p>
            <button style="background: #28a745; color: white; border: none; padding: 10px; border-radius: 5px; cursor: pointer;">Comprar</button>
        `;
        container.appendChild(card);
    });
}

// Ejecutar la carga de productos cuando la página termine de abrirse
document.addEventListener("DOMContentLoaded", loadProducts);

// ==========================================================
// 3. SISTEMA DE AUTENTICACIÓN (LOGIN) - COMPATIBLE CON TU HTML
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Evita que la página se recargue y desaparezcan tus datos de la pantalla
            e.preventDefault();

            const mail = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const button = document.getElementById('btn-login');

            const originalText = button.textContent;
            button.textContent = "Connecting...";
            button.disabled = true;

            // Conectar directamente con el Firebase que inicializaste en tu HTML
            firebase.auth().signInWithEmailAndPassword(mail, password)
                .then((userCredential) => {
                    alert("Welcome Administrator! Connection successful.");
                    button.textContent = originalText;
                    button.disabled = false;
                })
                .catch((error) => {
                    alert("Login error: " + error.message);
                    button.textContent = originalText;
                    button.disabled = false;
                });
        });
    }
});
