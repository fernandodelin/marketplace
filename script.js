
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Dell Precision M3800",
        price: 2000.00,
        image: "💻",
        category: "laptops"
    },
    {
        id: 2,
        name: "Camera GO PRO HERO 10",
        price: 2000.00,
        image: "📷",
        category: "ofertas"
    },
    {
        id: 3,
        name: "Mac Mini 2012 Core I7 + teclado + Trackpad",
        price: 1300.00,
        image: "💻",
        category: "laptops"
    }
];

// ...existing code...

// Função para renderizar os produtos
function renderProducts(products) {
    const container = document.getElementById('products-list');
    container.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';

        productDiv.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">R$${product.price.toFixed(2)}</div
            <a href="https://wa.me/?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.name)}" target="_blank" class="whatsapp-btn">
                Comprar no WhatsApp
            </a>
        `;

        container.appendChild(productDiv);
    });
}

// Certifique-se de ter um elemento com id="products-list" no seu HTML
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});