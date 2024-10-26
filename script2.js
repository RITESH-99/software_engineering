// Admin login credentials
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "password123";

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Show inventory section, hide login
        document.getElementById("login-section").style.display = "none";
        document.getElementById("inventory-section").style.display = "block";
    } else {
        showMessage("Incorrect username or password.", "error");
    }
});

// Inventory Management Logic
let inventory = [];

function addProduct(name, quantity, price) {
    const newProduct = {
        id: Date.now(),
        name: name,
        quantity: parseInt(quantity),
        price: parseFloat(price),
    };
    inventory.push(newProduct);
    renderInventory();
    showMessage("Product added successfully!", "success");
}

function renderInventory() {
    const inventoryBody = document.getElementById("inventory-body");
    inventoryBody.innerHTML = "";

    inventory.forEach(product => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <button class="edit" onclick="editProduct(${product.id})">Edit</button>
                <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;
        inventoryBody.appendChild(row);
    });
}

function deleteProduct(id) {
    inventory = inventory.filter(product => product.id !== id);
    renderInventory();
    showMessage("Product deleted successfully!", "error");
}

function editProduct(id) {
    const product = inventory.find(product => product.id === id);
    if (product) {
        const newQuantity = prompt("Enter new quantity:", product.quantity);
        if (newQuantity !== null && !isNaN(newQuantity)) {
            product.quantity = parseInt(newQuantity);
            renderInventory();
            showMessage("Product updated successfully!", "info");
        }
    }
}

function showMessage(message, type) {
    const messageBox = document.createElement("div");
    messageBox.className = `message ${type}`;
    messageBox.innerText = message;
    document.body.appendChild(messageBox);

    setTimeout(() => {
        messageBox.classList.add("fade-out");
        messageBox.addEventListener("transitionend", () => messageBox.remove());
    }, 2000);
}

// Form submission to add a product
document.getElementById("add-product-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("product-name").value.trim();
    const quantity = document.getElementById("product-quantity").value;
    const price = document.getElementById("product-price").value;

    if (name && quantity && price && quantity > 0 && price > 0) {
        addProduct(name, quantity, price);
        document.getElementById("product-name").value = "";
        document.getElementById("product-quantity").value = "";
        document.getElementById("product-price").value = "";
    } else {
        showMessage("Please enter valid product details.", "error");
    }
});

// Initial Render
renderInventory();
