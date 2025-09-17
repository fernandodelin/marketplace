
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
            <span class="product-image">${product.image}</span>
            <h3>${product.name}</h3>
            <p>Preço: R$ ${product.price.toFixed(2)}</p>
            <p>Categoria: ${product.category}</p>
            <a href="https://wa.me/?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.name)}" 
                target="_blank"
                class="whatsapp-btn"
            >
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