// Assuming you have a global array of products loaded from some data source
let products = [];

// Function to load products from a data source (e.g., API, static JSON file, etc.)
function loadProducts() {
    // Example: Fetch products from an API or local data source
    fetch('products.json') // Replace with your actual data source
        .then(response => response.json())
        .then(data => {
            products = data; // Assign the fetched products to the global products array
            displayProducts(products); // Display the products in the DOM
        })
        .catch(error => console.error('Error loading products:', error));
}

// Function to display products in the DOM
function displayProducts(productArray) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear previous products

    if (productArray.length === 0) {
        document.getElementById('noProductsMessage').style.display = 'block'; // Show message if no products
        return;
    }

    productArray.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item'; // Add a class for styling

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;

        productList.appendChild(productDiv); // Add the product to the product list
    });

    document.getElementById('noProductsMessage').style.display = 'none'; // Hide message if products are found
}

// Function to filter products based on the search input
function filterProducts() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase(); // Get search input
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchBox) // Check if product name includes the search term
    );

    displayProducts(filteredProducts); // Display the filtered products
}

// Call loadProducts when the page loads
document.addEventListener('DOMContentLoaded', loadProducts);
