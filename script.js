/* // // script.js
// document.addEventListener('DOMContentLoaded', function () {
//     // Get a reference to the cart quantity span
//     const quantitySpan = document.querySelector('.quantity');
  
//     // Function to update the cart quantity
//     function updateCartQuantity(quantity) {
//       quantitySpan.textContent = quantity;
//     }

  
//     // Add event listener to all "Add to Cart" buttons
//     const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
//     addToCartButtons.forEach(button => {
//       button.addEventListener('click', () => {
//         // Get the current cart quantity from localStorage
//         let cartQuantity = localStorage.getItem('cartQuantity') || 0;
//         // Increment the cart quantity when the button is clicked
//         cartQuantity++;
//         // Store the updated cart quantity in localStorage
//         localStorage.setItem('cartQuantity', cartQuantity);
//         // Update the cart quantity displayed in the span
//         updateCartQuantity(cartQuantity);

//       });
//     });
  
//     // Get the initial cart quantity from localStorage and update the span
//     let initialCartQuantity = localStorage.getItem('cartQuantity') || 0;
//     updateCartQuantity(initialCartQuantity);
//   });
  

// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the cart quantity span and message element
  const quantitySpan = document.querySelector('.quantity');
  const messageElement = document.getElementById('message');

  // Function to update the cart quantity
  function updateCartQuantity(quantity) {
    quantitySpan.textContent = quantity;
  }

  // --->Normal message
  // Function to show the message for a short duration
  function showMessage() {
    messageElement.style.display = 'block';
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 2000); // Display the message for 2 seconds (adjust as needed)
  }
  

  // Function to get the cart quantity from LocalStorage
  function getCartQuantity() {
    return parseInt(localStorage.getItem('cartQuantity')) || 0;
  }

  // Initialize the cart quantity
  let cartQuantity = getCartQuantity();
  updateCartQuantity(cartQuantity);

  // Function to receive messages from the object (cards.html)
  window.addEventListener('message', event => {
    if (event.data.action === 'addToCart') {
      // Increment the cart quantity when the "Add to Cart" button is clicked in cards.html
      cartQuantity++;
      // Store the updated cart quantity in localStorage
      localStorage.setItem('cartQuantity', cartQuantity);
      // Update the cart quantity displayed in the span
      updateCartQuantity(cartQuantity);
      // Show the "Item added to cart successfully" message
      showMessage();
    }
  });

  // Load the cards.html content into the #cards-container div
  const cardsContainer = document.getElementById('cards-container');
  const objectElement = cardsContainer.querySelector('object');
  objectElement.addEventListener('load', () => {
    // Send a message to the loaded object (cards.html) to set up communication
    objectElement.contentWindow.postMessage('setUpCommunication', '*');
  });
});
 */


document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the cart quantity span and message element
  const quantitySpan = document.querySelector('.quantity');
  const messageElement = document.getElementById('message');
 

  // Function to update the cart quantity
  function updateCartQuantity(quantity) {
    quantitySpan.textContent = quantity;
  }

// --->Normal message
  // Function to show the message for a short duration
  function showMessage() {
    messageElement.style.display = 'block';
    setTimeout(() => {
      messageElement.style.display = 'none';
    }, 2000); // Display the message for 2 seconds (adjust as needed)
  }

  // Function to get the cart quantity from LocalStorage
  function getCartQuantity() {
    return parseInt(localStorage.getItem('cartQuantity')) || 0;
  }

  // Initialize the cart quantity
  let cartQuantity = getCartQuantity();
  updateCartQuantity(cartQuantity);

  // Function to receive messages from the object (cards.html)
  window.addEventListener('message', event => {
    if (event.data.action === 'addToCart') {
      // Increment the cart quantity when the "Add to Cart" button is clicked in cards.html
      cartQuantity++;
      // Store the updated cart quantity in localStorage
      localStorage.setItem('cartQuantity', cartQuantity);
      // Update the cart quantity displayed in the span
      updateCartQuantity(cartQuantity);
      // Show the "Item added to cart successfully" message
      showMessage();
    }
  });

  // Load the cards.html content into the #cards-container div
  const cardsContainer = document.getElementById('cards-container');
  const objectElement = cardsContainer.querySelector('object');
  objectElement.addEventListener('load', () => {
    // Send a message to the loaded object (cards.html) to set up communication
    objectElement.contentWindow.postMessage('setUpCommunication', '*');
  });

  // Handle click on the cart icon
  const cartLink = document.getElementById('cart-link');
  cartLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    // Redirect to cart.html when the cart icon is clicked
    window.location.href = 'cart.html';
  });
});
