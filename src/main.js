
  // Visitor count logic
  let visitorCount = 0;
  function updateVisitorCount() {
    visitorCount++;
    document.getElementById('visitorCount').innerText = 'Visitors: ' + visitorCount;
  }
  updateVisitorCount();

  // Geolocation and ticker logic
  function updateTicker() {
    const tickerText = document.getElementById('tickerText');
    const date = new Date();
    const dateString = date.toLocaleString();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        tickerText.innerText = `Date: ${dateString} | Location: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
      });
    } else {
      tickerText.innerText = `Date: ${dateString} | Location: Not available`;
    }
  }
  updateTicker();

  // Menu option click logic
  const menuOptions = document.querySelectorAll('.menu-option');
  menuOptions.forEach(option => {
    option.addEventListener('click', () => {
      menuOptions.forEach(opt => opt.classList.remove('active'));
      option.classList.add('active');
    });
  });



  const contents = [
    {
        headline: "Welcome to Alberto Watch Company",
        description: "Discover the finest watches crafted with precision and elegance.",
        image: "image/background1.png"
    },
    {
        headline: "Experience Timeless Elegance",
        description: "Our watches blend classic style with modern innovation.",
        image: "image/new landing page.png"
    },
    {
        headline: "Crafted with Precision",
        description: "Every watch is a masterpiece of craftsmanship.",
        image: "image/land watch 2.png"
    },
    {
        headline: "Luxury Watches for Every Occasion",
        description: "Find the perfect watch for any event or celebration.",
        image: "image/land watch.png"
    }
];

let index = 0;

function updateContent() {
    index = (index + 1) % contents.length;

    document.getElementById("headline").textContent = contents[index].headline;
    document.getElementById("description").textContent = contents[index].description;
    document.getElementById("watchImage").src = contents[index].image;
    
    // Add fall-in animation class to the text container
    const textContainer = document.getElementById("textContainer");
    textContainer.classList.remove("fall-in");
    void textContainer.offsetWidth; // Trigger reflow
    textContainer.classList.add("fall-in");

    // Add slide-in animation class to the image container
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.classList.remove("slide-in");
    void imageContainer.offsetWidth; // Trigger reflow
    imageContainer.classList.add("slide-in");
}

setInterval(updateContent, 4000);

const vintageBtn = document.getElementById('vintageBtn');
const luxuryBtn = document.getElementById('luxuryBtn');
const smartBtn = document.getElementById('smartBtn');

const vintage = document.getElementById('vintage');
const luxury = document.getElementById('luxury');
const smart = document.getElementById('smart');

vintageBtn.onclick = () => {
    vintage.classList.remove('hidden');
    luxury.classList.add('hidden');
    smart.classList.add('hidden');
    vintage.classList.add('fade-in');
    luxury.classList.remove('fade-in');
    smart.classList.remove('fade-in');

    vintageBtn.classList.add('bg-secondary', 'text-white');
    luxuryBtn.classList.remove('bg-secondary', 'text-white');
    smartBtn.classList.remove('bg-secondary', 'text-white');

    vintageBtn.classList.add('bg-secondary', 'text-white');
    luxuryBtn.classList.remove('bg-secondary', 'text-white');
    smartBtn.classList.remove('bg-secondary', 'text-white');
};

luxuryBtn.onclick = () => {
    vintage.classList.add('hidden');
    luxury.classList.remove('hidden');
    smart.classList.add('hidden');
    luxury.classList.add('fade-in');
    vintage.classList.remove('fade-in');
    smart.classList.remove('fade-in');

    luxuryBtn.classList.add('bg-secondary', 'text-white');
    vintageBtn.classList.remove('bg-secondary', 'text-white');
    smartBtn.classList.remove('bg-secondary', 'text-white');
};

smartBtn.onclick = () => {
    vintage.classList.add('hidden');
    luxury.classList.add('hidden');
    smart.classList.remove('hidden');
    smart.classList.add('fade-in');
    vintage.classList.remove('fade-in');
    luxury.classList.remove('fade-in');

    smartBtn.classList.add('bg-secondary', 'text-white');
    vintageBtn.classList.remove('bg-secondary', 'text-white');
    luxuryBtn.classList.remove('bg-secondary', 'text-white');
};

function openPopup(title, subtitle, description, image) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupSubtitle').innerText = subtitle;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('popupImage').src = image;
    document.getElementById('popup').classList.remove('hidden');
  }

  function closePopup() {
    document.getElementById('popup').classList.add('hidden');
  }


document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modal = document.getElementById('watch-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartMessage = document.getElementById('cart-message');
    const modalClose = document.getElementById('modal-close');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const description = button.getAttribute('data-description');
            const image = button.getAttribute('data-image');

            modalTitle.textContent = name;
            modalImage.src = image;
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            modal.classList.remove('hidden');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        cartMessage.classList.add('hidden');
    });

    addToCartButton.addEventListener('click', () => {
        cartMessage.classList.remove('hidden');
        setTimeout(() => {
            cartMessage.classList.add('hidden');
        }, 2000);
    });
});



// new arrivals section of code 
document.addEventListener('DOMContentLoaded', () => {
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const modal = document.getElementById('watch-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const addToCartModalButton = document.getElementById('add-to-cart-modal');
    const cartMessage = document.getElementById('cart-message');
    const modalClose = document.getElementById('modal-close');
    const loadMoreButton = document.getElementById('load-more');
    const loadMoreContainer = document.getElementById('load-more-container');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            const description = button.getAttribute('data-description');
            const image = button.getAttribute('data-image');

            modalTitle.textContent = name;
            modalImage.src = image;
            modalDescription.textContent = description;
            modalPrice.textContent = price;

            modal.classList.remove('hidden');
        });
    });

    modalClose.addEventListener('click', () => {
        modal.classList.add('hidden');
        cartMessage.classList.add('hidden');
    });

    addToCartModalButton.addEventListener('click', () => {
        cartMessage.classList.remove('hidden');
        setTimeout(() => {
            cartMessage.classList.add('hidden');
        }, 2000);
    });

    // Add to Cart, Wishlist, Favorite functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart: ' + button.getAttribute('data-name'));
        });
    });

    document.querySelectorAll('.wishlist').forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to wishlist: ' + button.parentElement.parentElement.querySelector('h3').textContent);
        });
    });

    document.querySelectorAll('.favorite').forEach(button => {
        button.addEventListener('click', () => {
            alert('Marked as favorite: ' + button.parentElement.parentElement.querySelector('h3').textContent);
        });
    });

    loadMoreButton.addEventListener('click', () => {
        const newArrivalsContainer = document.getElementById('load-more-container');
        newArrivalsContainer.innerHTML = `
            <!-- Watch Box 4 -->
            <div class="bg-white mt-4 p-6 rounded-lg shadow-md relative overflow-hidden group">
                <div class="relative w-full h-64 mb-4">
                    <img src="image/load3.jpg" alt="TAG Heuer Carrera Porsche" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <div class="absolute inset-0 flex flex-col items-end justify-center space-y-2 p-2 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
                        <button class="add-to-cart bg-secondary text-black p-2 rounded-full transition-transform duration-300 hover:bg-primary" data-name="TAG Heuer Carrera Porsche" data-price="$4000" data-image="image/vintage4.jpg" data-description="Description for Vintage Watch 4">🛒</button>
                        <button class="wishlist bg-secondary text-black p-2 rounded-full transition-transform duration-300 hover:bg-primary">❤️</button>
                        <button class="favorite bg-secondary text-black p-2 rounded-full transition-transform duration-300 hover:bg-primary">⭐</button>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-2">TAG Heuer Carrera Porsche</h3>
                <p class="text-gray-600 mb-2">$4000</p>
                <div class="flex items-center mb-4">
                    <span class="text-secondary">★★★★★</span>
                </div>
                <button class="view-details bg-primary text-white px-4 py-2 rounded" data-name="TAG Heuer Carrera Porsche" data-price="$4000" data-description="A sporty chronograph inspired by Porsche, featuring bold red accents and a high-performance movement." data-image="image/load3.jpg">See Details</button>
            </div>
            <!-- Watch Box 5 -->
            <div class="bg-white p-6 mt-4 rounded-lg shadow-md relative overflow-hidden group">
                <div class="relative w-full h-64 mb-4">
                    <img src="image/load2.jpg" alt="Omega Seamaster Diver 300M" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <div class="absolute inset-0 flex flex-col items-end justify-center space-y-2 p-2 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
                        <button class="add-to-cart bg-secondary text-black p-2 rounded-full transition-transform duration-300 hover:bg-primary" data-name="Omega Seamaster Diver 300M" data-price="$5000" data-image="image/vintage5.jpg" data-description="Description for Vintage Watch 5">🛒</button>
                        <button class="wishlist bg-secondary text-black p-2 rounded-full transition-transform duration-300 hover:bg-primary">❤️</button>
                        <button class="favorite bg-secondary text-black p-2 rounded-full transition-transform duration-300 hover:bg-primary">⭐</button>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-2">Omega Seamaster Diver 300M</h3>
                <p class="text-gray-600 mb-2">$5000</p>
                <div class="flex items-center mb-4">
                    <span class="text-yellow-500">★★★★★</span>
                </div>
                <button class="view-details bg-primary text-white px-4 py-2 rounded" data-name="Omega Seamaster Diver 300M" data-price="$5000" data-description="A professional dive watch with a ceramic bezel and advanced dive features." data-image="image/load2.jpg">See Details</button>
            </div>
            <!-- Watch Box 6 -->
            <div class="bg-white p-6 mt-4 rounded-lg shadow-md relative overflow-hidden group">
                <div class="relative w-full h-64 mb-4">
                    <img src="image/load1.Avif" alt="Rolex Oyster Perpetual 41" class="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <div class="absolute inset-0 flex flex-col items-end justify-center space-y-2 p-2 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0">
                        <button class="add-to-cart bg-primary text-white p-2 rounded-full transition-transform duration-300 hover:bg-blue-700" data-name="Rolex Oyster Perpetual 41" data-price="$6000" data-image="image/load1.Avif" data-description="A sleek, durable watch with a blue sunray-finish dial and the latest Rolex movement">🛒</button>
                        <button class="wishlist bg-primary text-white p-2 rounded-full transition-transform duration-300 hover:bg-red-700">❤️</button>
                        <button class="favorite bg-primary text-white p-2 rounded-full transition-transform duration-300 hover:bg-yellow-700">⭐</button>
                    </div>
                </div>
                <h3 class="text-xl font-bold mb-2">Rolex Oyster Perpetual 41</h3>
                <p class="text-gray-600 mb-2">$6000</p>
                <div class="flex items-center mb-4">
                    <span class="text-secondary">★★★★★</span>
                </div>
                <button class="view-details bg-primary text-white px-4 py-2 rounded" data-name="Rolex Oyster Perpetual 41" data-price="$6000" data-description="A sleek, durable watch with a blue sunray-finish dial and the latest Rolex movement." data-image="image/load1.Avif">See Details</button>
            </div>
        `;

        newArrivalsContainer.classList.remove('hidden');

        loadMoreButton.classList.add('hidden');

        // Add event listeners for new elements
        newArrivalsContainer.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', (event) => {
                const button = event.target;
                const name = button.getAttribute('data-name');
                const price = button.getAttribute('data-price');
                const description = button.getAttribute('data-description');
                const image = button.getAttribute('data-image');

                modalTitle.textContent = name;
                modalImage.src = image;
                modalDescription.textContent = description;
                modalPrice.textContent = price;

                modal.classList.remove('hidden');
            });
        });

        newArrivalsContainer.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                alert('Added to cart: ' + button.getAttribute('data-name'));
            });
        });

        newArrivalsContainer.querySelectorAll('.wishlist').forEach(button => {
            button.addEventListener('click', () => {
                alert('Added to wishlist: ' + button.parentElement.parentElement.querySelector('h3').textContent);
            });
        });

        newArrivalsContainer.querySelectorAll('.favorite').forEach(button => {
            button.addEventListener('click', () => {
                alert('Marked as favorite: ' + button.parentElement.parentElement.querySelector('h3').textContent);
            });
        });
    });
});

// new arrivals section of code 

// store section

let cart = [];
let total = 0;

function openModal(id) {
    const product = document.getElementById(id).cloneNode(true);
    product.classList.remove('group', 'animate-slide-in');
    product.querySelector('.group-hover\\:scale-110').classList.remove('group-hover:scale-110');
    document.getElementById('watch-details-content').innerHTML = '';
    document.getElementById('watch-details-content').appendChild(product);
    document.getElementById('modal-template').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-template').classList.add('hidden');
}

function addToCart(productName, price, imgSrc) {
    const product = { name: productName, price, imgSrc };
    cart.push(product);
    total += price;
    alert(`${productName} added to cart successfully!`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center justify-between mb-4';
        cartItem.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}" class="w-16 h-16 object-cover rounded mr-4">
            <div class="flex-1">
                <h3 class="text-lg font-semibold">${product.name}</h3>
                <p class="text-gray-600">$${product.price}</p>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-600">&times;</button>
        `;
        cartItems.appendChild(cartItem);
    });
    document.getElementById('cart-total').innerText = total;
    document.getElementById('cart-modal').classList.remove('hidden');
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function closeCart() {
    document.getElementById('cart-modal').classList.add('hidden');
}

function checkout() {
    alert('Checkout functionality not implemented yet.');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim();
    const nameIsValid = /^[a-zA-Z\s]+$/.test(nameValue);

    if (!nameIsValid) {
        event.preventDefault();
        nameError.classList.remove('hidden');
        nameInput.classList.add('border-red-500');
        nameInput.classList.remove('border-gray-300');
    } else {
        nameError.classList.add('hidden');
        nameInput.classList.add('border-gray-300');
        nameInput.classList.remove('border-red-500');
    }
});

   // JavaScript for Countdown Timer
   const countdown = () => {
    const endDate = new Date().setHours(24, 0, 0, 0); // set to next midnight
    const now = new Date().getTime();
    const remainingTime = endDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

    if (remainingTime < 0) {
      clearInterval(countdownInterval);
      // Logic to change the image and reset the countdown timer
      changePromoImage();
    }
  };

  const changePromoImage = () => {
    // Function to change the promo image
    document.querySelector('.promo-bg').style.backgroundImage = 'url(image/countdown.png)';
    countdown(); // Restart countdown
  };

  const countdownInterval = setInterval(countdown, 1000);



// loader 
window.addEventListener("load", ()=>{
    const loader = document.querySelector(".loader")

    loader.classList.add("loader-hidden")

    loader.addEventListener("transitionend", () =>{
        document.body.removeChild("loader")
    })
})


