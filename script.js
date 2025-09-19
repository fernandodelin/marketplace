
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Dell Precision M3800",
        price: 2000.00,
        image: "💻",
        category: "laptops",
        whatsapp: "https://wa.me/p/25037994632485604/553183399609",
        facebook: "https://www.facebook.com/marketplace/item/1339352807819563/"
    },
    {
        id: 2,
        name: "Camera GO PRO HERO 10",
        price: 2000.00,
        image: "📷",
        category: "ofertas",
        whatsapp: "https://wa.me/p/24443824885307896/553183399609",
        facebook: "https://www.facebook.com/marketplace/item/1113993376893625/"
    },
    {
        id: 3,
        name: "Mac Mini 2012 Core I7 + teclado + Trackpad",
        price: 1300.00,
        image: "💻",
        category: "laptops",
        whatsapp: "https://wa.me/p/24213745184993756/553183399609",
        facebook: "https://www.facebook.com/marketplace/item/629442436901332/"
    }
];

// ...existing code...
const botaoWhatsapp = document.getElementById('whatsapp-btn');
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
            <div class="whatsapp-btn">
                <a href="https://wa.me/?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.name)}" target="_blank" class="whatsapp-btn">
                    Comprar no WhatsApp
                </a>
            </div>
            <div class="whatsapp-btn">
                <a href="${product.whatsapp}" target="_blank" class="whatsapp-btn">
                    + info no WhatsApp
                </a>
            </div>
            <div class="whatsapp-btn">
                <a href="${product.facebook}" target="_blank" class="whatsapp-btn">
                    + info no Facebook
                </a>
            </div>  
        `;

        container.appendChild(productDiv);
    });
}

// Certifique-se de ter um elemento com id="products-list" no seu HTML
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});