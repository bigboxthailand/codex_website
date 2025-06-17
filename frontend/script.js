const cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
}

function showCart() {
    const list = document.getElementById('cart-items');
    if (!list) return;
    list.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

function handleCheckout(event) {
    const form = document.getElementById('checkout-form');
    if (!form) return;
    event.preventDefault();
    alert('Checkout is not implemented in this demo.');
}

window.addEventListener('DOMContentLoaded', () => {
    showCart();
    const form = document.getElementById('checkout-form');
    if (form) form.addEventListener('submit', handleCheckout);
});
