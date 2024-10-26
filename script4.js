const products = [
    { id: 1, name: 'iPhone 13', price: 799.99, img: 'https://via.placeholder.com/150?text=iPhone+13' },
    { id: 2, name: 'Samsung Galaxy S21', price: 699.99, img: 'https://via.placeholder.com/150?text=Galaxy+S21' },
    { id: 3, name: 'Dell XPS 13', price: 999.99, img: 'https://via.placeholder.com/150?text=Dell+XPS+13' },
    { id: 4, name: 'MacBook Pro', price: 1299.99, img: 'https://via.placeholder.com/150?text=MacBook+Pro' },
    { id: 5, name: 'HP Envy Desktop', price: 899.99, img: 'https://via.placeholder.com/150?text=HP+Envy+Desktop' }
];

let totalPrice = 0;

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'shopping-link';
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(price) {
    totalPrice += price;
    const gst = totalPrice * 0.18;
    const finalPrice = totalPrice + gst;

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
    document.getElementById('gst').textContent = gst.toFixed(2);
    document.getElementById('final-price').textContent = finalPrice.toFixed(2);

    alert('Product added to cart!');
}

function payNow() {
    alert('Payment processing not implemented in this demo.');
}

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const feedback = document.getElementById('feedback').value;
    alert('Thank you for your feedback: ' + feedback);
    document.getElementById('feedbackForm').reset();
});

document.addEventListener('DOMContentLoaded', displayProducts);
