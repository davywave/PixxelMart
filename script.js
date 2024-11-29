// Simple Countdown Timer
function countdown() {
  const timer = document.getElementById('timer');
  let hours = 9, minutes = 4, seconds = 52;

  setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }

    timer.textContent = `${hours}h : ${minutes}m : ${seconds}s`;
  }, 1000);
}

countdown();
function buyNow(productName) {
  // Redirect to the payment page with the product name
  const paymentUrl = `/payment-page.html?product=${encodeURIComponent(productName)}`;
  window.location.href = paymentUrl;
}
function viewDetails(productName) {
  // Redirect to the product details page
  const detailsUrl = `/product-details.html?product=${encodeURIComponent(productName)}`;
  window.location.href = detailsUrl;
}
function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}
// Retrieve cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartContainer = document.getElementById('cart-container');

// Render cart items
cart.forEach((item) => {
  const listItem = document.createElement('div');
  listItem.textContent = item;
  cartContainer.appendChild(listItem);
});
document.getElementById("search-input").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const cardInput = document.querySelector("#card-number");

cardInput.addEventListener("input", () => {
  if (cardInput.value.length === 16) {
    cardInput.style.borderColor = "green";
  } else {
    cardInput.style.borderColor = "red";
  }
});

const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
});

// Initialize
showSlide(currentIndex);
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    question.classList.toggle('active');
  });
});
function closeAd() {
  var ad = document.getElementById("ad-banner");
  ad.style.display = "none";
}
function addToWishlist(product) {
  const wishlist = document.getElementById('wishlist-items');
  const li = document.createElement('li');
  li.textContent = product;
  wishlist.appendChild(li);
}
const recommendedProducts = [
  { name: 'Product 1', image: 'image1.jpg' },
  { name: 'Product 2', image: 'image2.jpg' },
];

const container = document.getElementById('recommendation-items');
recommendedProducts.forEach(product => {
  const div = document.createElement('div');
  div.innerHTML = `<img src="${product.image}" style="width: 100px;"> <p>${product.name}</p>`;
  container.appendChild(div);
});
function dismissPromo() {
  document.getElementById('promo-banner').style.display = 'none';
}
const productDetails = {
  1: { name: 'Product A', price: '$100', features: 'Feature 1, Feature 2' },
  2: { name: 'Product B', price: '$120', features: 'Feature 3, Feature 4' },
};

document.querySelectorAll('#compare-product-1, #compare-product-2').forEach(select => {
  select.addEventListener('change', () => {
      const prod1 = document.getElementById('compare-product-1').value;
      const prod2 = document.getElementById('compare-product-2').value;
      const result = document.getElementById('comparison-result');
      if (prod1 != 0 && prod2 != 0) {
          result.innerHTML = `
              <div style="display: flex; gap: 20px;">
                  <div>
                      <h4>${productDetails[prod1].name}</h4>
                      <p>Price: ${productDetails[prod1].price}</p>
                      <p>Features: ${productDetails[prod1].features}</p>
                  </div>
                  <div>
                      <h4>${productDetails[prod2].name}</h4>
                      <p>Price: ${productDetails[prod2].price}</p>
                      <p>Features: ${productDetails[prod2].features}</p>
                  </div>
              </div>
          `;
      }
  });
});
let trendingIndex = 0;
const trendingProducts = document.querySelectorAll('#trending-products .product');

setInterval(() => {
    trendingProducts.forEach((el, idx) => {
        el.style.transform = `translateX(-${100 * trendingIndex}%)`;
    });
    trendingIndex = (trendingIndex + 1) % trendingProducts.length;
}, 3000);
document.addEventListener('mouseout', (event) => {
  if (event.clientY < 0) {
      document.getElementById('exit-popup').style.display = 'block';
  }
});
function shareOnPlatform(platform) {
  alert(`Sharing on ${platform}...`);
  // Add platform-specific sharing links if necessary
}
// Toggle chatbot visibility
function toggleChatbot() {
  const chatbot = document.getElementById('chatbot-container');
  chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

// Chatbot logic
function sendChatbotMessage() {
  const userMessage = document.getElementById('chatbot-input').value;
  if (!userMessage.trim()) return;

  const chatArea = document.getElementById('chatbot-messages');

  // Add user message
  const userMessageDiv = document.createElement('div');
  userMessageDiv.style.textAlign = 'right';
  userMessageDiv.innerHTML = `<p style="background: #e0ffe0; display: inline-block; padding: 8px; border-radius: 10px; margin-bottom: 10px;">${userMessage}</p>`;
  chatArea.appendChild(userMessageDiv);

  // Add bot response
  const botMessageDiv = document.createElement('div');
  botMessageDiv.style.textAlign = 'left';

  const botResponse = getChatbotResponse(userMessage);
  botMessageDiv.innerHTML = `<p style="background: #f0f0f0; display: inline-block; padding: 8px; border-radius: 10px; margin-bottom: 10px;">${botResponse}</p>`;
  chatArea.appendChild(botMessageDiv);

  // Scroll to the latest message
  chatArea.scrollTop = chatArea.scrollHeight;

  // Clear input field
  document.getElementById('chatbot-input').value = '';
}

// Predefined responses
// Predefined responses for shopping-related questions
function getChatbotResponse(message) {
  const lowerMessage = message.toLowerCase();

  // FAQs
  const responses = {
      "hello": "Hello! Welcome to Pixel Mart. How can I assist you with your shopping today? 😊",
      "hi": "Hi there! How can I help you shop today?",
      "payment options": "We accept payments via card, bank transfer, USSD, and PayPal.",
      "delivery time": "Delivery usually takes 3-5 business days, depending on your location.",
      "return policy": "You can return any item within 30 days of purchase for a full refund.",
      "discounts": "Yes! Check out our 'Deals' section for the latest discounts and offers.",
      "track my order": "To track your order, visit the 'Order Tracking' page and enter your order ID.",
      "available brands": "We have top brands like Samsung, Apple, Nike, and Sony. What are you looking for?",
      "contact us": "You can reach us via email at support@pixelmart.com or call +123-456-7890.",
      "refund policy": "Refunds are processed within 7 business days after the item is returned.",
      "popular products": "Our most popular products include the iPhone 15, Samsung Galaxy S23, and Nike Air Max."
  };

  // Match exact keywords or phrases
  for (const key in responses) {
      if (lowerMessage.includes(key)) {
          return responses[key];
      }
  }

  // Fallback response
  return "I'm sorry, I didn't understand that. Could you ask something else about shopping?";
}
// Toggle Signup/Login Form
function toggleAuth() {
  const authContainer = document.getElementById('auth-container');
  authContainer.style.display = authContainer.style.display === 'none' ? 'block' : 'none';
}

// Handle Signup Form Submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  // Save user data to local storage (temporary for demo)
  localStorage.setItem('user', JSON.stringify({ username, email }));

  alert('Account created successfully!');
  toggleAuth();
});
const bannerTexts = [
  "Don't Miss Out!",
  "Limited Time Offer!",
  "Exclusive PixelMart Deals!"
];

let index = 0;
setInterval(() => {
  document.querySelector('.promo-text h2').innerText = bannerTexts[index];
  index = (index + 1) % bannerTexts.length;
}, 3000);
// Simulated product data
const products = [
  { name: "Product 1", price: "NGN 2,442.09", image: "product1.jpg" },
  { name: "Product 2", price: "NGN 6,652.16", image: "product2.jpg" },
  // Add more products
];

// Load products dynamically
const productGrid = document.querySelector(".product-grid");
products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p class="price">${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;
  productGrid.appendChild(card);
});
function showProductDetails(title, price, image, description) {
  // Populate modal with product details
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalPrice').textContent = price;
  document.getElementById('modalImage').src = image;
  document.getElementById('modalDescription').textContent = description;

  // Show modal
  document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
  // Hide modal
  document.getElementById('productModal').style.display = 'none';
}
