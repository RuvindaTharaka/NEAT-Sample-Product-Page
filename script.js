var products = [
    {
        name: "Product 1",
        image: "product1.jpg",
        description: "Description of Product 1",
        details: "Detailed information about Product 1"
    },
    {
        name: "Product 2",
        image: "product2.jpg",
        description: "Description of Product 2",
        details: "Detailed information about Product 2"
    },
    // Add more products as needed
 ];
 
 var productGrid = document.getElementById("productGrid");
 
 products.forEach(function(product) {
    var productItem = document.createElement("div");
    productItem.className = "product-item";
 
    var productName = document.createElement("h3");
    productName.textContent = product.name;
 
    var productImage = document.createElement("img");
    productImage.src = product.image;
 
    var productDescription = document.createElement("p");
    productDescription.textContent = product.description;
 
    productItem.appendChild(productName);
    productItem.appendChild(productImage);
    productItem.appendChild(productDescription);
 
    productItem.addEventListener("click", function() {
        openProductDetailPage(product);
    });
 
    productGrid.appendChild(productItem);
 });
 
 function openProductDetailPage(product) {
    var productDetailURL = "product-detail.html"; // Specify the correct path to the product detail HTML file
    var productDetailWindow = window.open(productDetailURL, "_blank");
    productDetailWindow.product = product;
 }
 