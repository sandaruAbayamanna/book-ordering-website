/* // cart.js

document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the cart items div
    const cartItemsDiv = document.getElementById('cart-items');
  
    // Function to extract query parameters from the URL
    function getQueryParameters() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams;
    }
  
    // Function to display cart items
    function displayCartItems() {
      // Get the cart quantity from the query parameter
      const queryParams = getQueryParameters();
      const cartQuantity = queryParams.get('cartQuantity') || 0;
  
      // Display the cart quantity in the cart items div
      cartItemsDiv.textContent = `Cart Quantity: ${cartQuantity}`;
    }
  
    // Call the displayCartItems function on page load
    displayCartItems();
  });
   */

  document.addEventListener('DOMContentLoaded', function () {
    // Function to display the cart items on the cart.html page
    function displayCartItems() {

        console.log('displayCartItems() function is being called.');
      let cartItems = JSON.parse(localStorage.getItem('cartQuantity')) || [];
      console.log('Cart Items:', cartItems);

       /* // Make sure cartItems is an array, if not, create an empty array
       if (!Array.isArray(cartItems)) {
        cartItems = [];
        console.log('Cart Items empty array:', cartItems);

    } */

    // Check if cartItems is null or not an array, and initialize it as an empty array if needed
    if (!Array.isArray(cartItems)) {
        //cartItems = [];
        cartItems = [cartItems];
        console.log('Cart Items empty array:', cartItems);
      }
  
      // Get a reference to the container where you want to display the cart items
      const cartContainer = document.getElementById('cart-container');
  
      // Loop through the cart items and create HTML elements to display them
      cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
          <p>${item.name}</p>
          <p>Price: $${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
          <hr>
        `;
        cartContainer.appendChild(itemElement);
      });
    }
  
    // Call the displayCartItems function to show the cart items when the page is loaded
    displayCartItems();
  });
  