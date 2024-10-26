const products = [
    { id: 1, name: "Laptop", price: "$799.99", imgSrc: "https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg", category: "electronics" },
    { id: 2, name: "Smartphone", price: "$599.99", imgSrc: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-sm-s921blbcins-thumb-539572328", category: "electronics" },
    { id: 3, name: "Headphones", price: "$149.99", imgSrc: "https://www.reliancedigital.in/medias/Sony-BT-HP-WH-CH520-Blue-493841805-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjAxM3xpbWFnZS9qcGVnfGltYWdlcy9oYzkvaDkxLzEwMDE5MjczODAxNzU4LmpwZ3xlYzhkODQ2Zjc0OWNlZGYzZTk4ZjkwNGEwNDc4MWE1YWJlZjBjMDEyOWZiZTIwYzZkMjk5OTg2OTI2YmU3MWQ2", category: "electronics" },
    { id: 4, name: "Tablet", price: "$299.99", imgSrc: "https://p3-ofp.static.pub/fes/cms/2023/02/22/5rhddw9d8vm9xfkexcwzvvi9lindg8985574.png", category: "electronics" },
    { id: 5, name: "Smartwatch", price: "$199.99", imgSrc: "https://assets.ajio.com/medias/sys_master/root/20230516/fSRt/64639ccdd55b7d0c63b981e9/-288Wx360H-4938378220-multi-MODEL.jpg", category: "electronics" },
    { id: 6, name: "Office Chair", price: "$89.99", imgSrc: "https://bantia.in/cdn/shop/products/bei-6_800x.jpg?v=1661508745", category: "furniture" },
    { id: 7, name: "Desk Lamp", price: "$24.99", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuEgETOwgWdwYF5FECUuOkxAWzMV8XDIjqA&s", category: "furniture" },
    { id: 8, name: "Sofa", price: "$499.99", imgSrc: "https://shopps.in/wp-content/uploads/2023/10/1200x1200-38-1024x1024.jpg", category: "furniture" },
    { id: 9, name: "Dining Table", price: "$399.99", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoh12zBCddjFLp0pNh4XbEOnrJMXaSFrGrQ&s", category: "furniture" },
    { id: 10, name: "Bookshelf", price: "$129.99", imgSrc: "https://cdn-jdeil.nitrocdn.com/lGjOWHCsMSZzhWiAYLOVMoZUqAiPeEcw/assets/images/optimized/rev-15d3e69/www.alankaram.in/wp-content/uploads/2021/10/BS-STU_3.jpg", category: "furniture" },
    { id: 11, name: "T-shirt", price: "$19.99", imgSrc: "https://assets.ajio.com/medias/sys_master/root/20230629/3fk1/649cafedeebac147fc2d44ef/-473Wx593H-465960612-teal-MODEL.jpg", category: "clothing" },
    { id: 12, name: "Jeans", price: "$39.99", imgSrc: "https://images.bestsellerclothing.in/data/vero-moda/21-nov-2022/102456003_g6.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto&dpr=1.2", category: "clothing" },
    { id: 13, name: "Jacket", price: "$59.99", imgSrc: "https://www.voganow.com/cdn/shop/files/BBGJ-1108-014_2_copy.jpg?v=1702101740&width=360", category: "clothing" },
    { id: 14, name: "Sneakers", price: "$49.99", imgSrc: "https://rukminim2.flixcart.com/image/850/1000/l3dcl8w0/shoe/j/u/w/7-1522-multi-shozie-multicolor-original-imagegdaad9g8mvs.jpeg?q=90&crop=false", category: "clothing" },
    { id: 15, name: "Cap", price: "$15.99", imgSrc: "https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/t/7/b/free-latest-ny-baseball-cap-highever-original-imagnm8yxxvmhmdy.jpeg?q=90&crop=false", category: "clothing" },
    { id: 16, name: "Kitchen Knife Set", price: "$39.99", imgSrc: "https://www.jiomart.com/images/product/original/rvuppswnjf/professional-kitchen-knife-set-stainless-steel-product-images-orvuppswnjf-p603543132-0-202308030724.jpg?im=Resize=(1000,1000)", category: "kitchen" },
    { id: 17, name: "Microwave", price: "$99.99", imgSrc: "https://rukminim2.flixcart.com/image/850/1000/xif0q/microwave-new/v/e/m/-original-imagjnnzbg4dyp86.jpeg?q=90&crop=false", category: "kitchen" },
    { id: 18, name: "Blender", price: "$49.99", imgSrc: "https://www.electrolux.com.ph/globalassets/appliances/blenders-juicers/e3tb1-611s/e3tb1-611s-angl-1500x1500.png", category: "kitchen" },
    { id: 19, name: "Coffee Maker", price: "$69.99", imgSrc: "https://images-cdn.ubuy.co.in/633ba22dac6e2a4a004d8134-de-x27-longhi-all-in-one.jpg", category: "kitchen" },
    { id: 20, name: "Toaster", price: "$29.99", imgSrc: "https://myborosil.com/cdn/shop/files/my-borosil-toasters-grills-borosil-krispy-pop-up-toaster-black-33330162106506.jpg", category: "kitchen" },
];
// Utility function to hide all sections
function hideAllSections() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('cart').style.display = 'none';
    document.getElementById('payment').style.display = 'none';
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

// Function to display products based on category
function displayProducts(category) {
    hideAllSections();  // Hide all sections before showing the main content
    const productContainer = document.getElementById('main-content');
    productContainer.style.display = 'flex';  // Show main content section

    productContainer.innerHTML = ''; // Clear existing products

    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product';
        productCard.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        
        productCard.querySelector('.add-to-cart').addEventListener('click', () => {
            showCart(product);
        });
        
        productContainer.appendChild(productCard);
    });
}

// Show the cart section
function showCart(product) {
    hideAllSections();  // Hide all sections before showing the cart
    const cartSection = document.getElementById('cart');
    cartSection.style.display = 'block';
    const form = document.getElementById('customer-details-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        showPayment();
    };
}

// Show the payment section
function showPayment() {
    hideAllSections();  // Hide all sections before showing the payment section
    document.getElementById('payment').style.display = 'block';
}

// Handle payment confirmation
document.getElementById('confirm-payment').addEventListener('click', () => {
    hideAllSections();  // Hide all sections before showing success message
    document.getElementById('success-message').style.display = 'block';
    
    // Automatically redirect to home after 3 seconds
    setTimeout(() => {
        hideAllSections();
        displayProducts(); // Show the home screen
    }, 3000);
});

// Display products when the page loads
window.onload = () => {
    displayProducts(); // Show all products by default
};

// Event listener for Home button
document.getElementById('home-button').addEventListener('click', (e) => {
    e.preventDefault();
    displayProducts(); // Show all products on Home click
});

// Event listener for Products button
document.getElementById('products-button').addEventListener('click', (e) => {
    e.preventDefault();
    displayProducts('furniture'); // Show furniture products when Products is clicked
});

// Event listener for Contact button
document.getElementById('contact-button').addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    document.getElementById('contact').style.display = 'block';  // Show contact section
})