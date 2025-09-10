
// Dados dos produtos
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 8999.99,
        image: "📱",
        category: "smartphones"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 6999.99,
        image: "📱",
        category: "smartphones"
    },
    {
        id: 3,
        name: "MacBook Pro M3",
        price: 15999.99,
        image: "💻",
        category: "laptops"
    },
    {
        id: 4,
        name: "Dell XPS 13",
        price: 8999.99,
        image: "💻",
        category: "laptops"
    },
    {
        id: 5,
        name: "AirPods Pro",
        price: 2499.99,
        image: "🎧",
        category: "acessorios"
    },
    {
        id: 6,
        name: "iPad Air",
        price: 4999.99,
        image: "📱",
        category: "tablets"
    },
    {
        id: 7,
        name: "Apple Watch Series 9",
        price: 3999.99,
        image: "⌚",
        category: "acessorios"
    },
    {
        id: 8,
        name: "PlayStation 5",
        price: 4999.99,
        image: "🎮",
        category: "games"
    }
];

// Carrinho de compras
let cart = [];

// Renderizar produtos
function renderProducts(productList = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Adicionar ao Carrinho
            </button>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Animação de feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Adicionado!';
    button.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52)';
    }, 1000);
}

// Atualizar interface do carrinho
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Animação do contador
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 200);
}

// Toggle do carrinho
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const isVisible = cartModal.style.display === 'block';
    
    if (isVisible) {
        cartModal.style.display = 'none';
    } else {
        renderCartItems();
        cartModal.style.display = 'block';
    }
}

// Renderizar itens do carrinho
function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">Seu carrinho está vazio</p>';
        cartTotal.textContent = 'Total: R$ 0,00';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <span style="color: #666;">Quantidade: ${item.quantity}</span>
            </div>
            <div>
                <div style="font-weight: bold; color: #667eea;">
                    R$ ${itemTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </div>
                <button onclick="removeFromCart(${item.id})" style="background: #ff4757; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer; margin-top: 5px;">
                    Remover
                </button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

// Remover do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    renderCartItems();
}

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Compra finalizada! Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\nObrigado por comprar na TechStore!`);
    
    cart = [];
    updateCartUI();
    toggleCart();
}

// Buscar produtos
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

// Event listeners
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Fechar modal clicando fora
document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) {
        toggleCart();
    }
});

// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Inicializar a loja
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});
