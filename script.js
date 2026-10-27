const MENU_URL = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";

const fallbackMenu = [
  { id: 1, name: "Cheeseburger", price: 5.99 },
  { id: 2, name: "Pizza", price: 8.99 },
  { id: 3, name: "Tacos", price: 3.99 },
  { id: 4, name: "Sushi", price: 11.99 },
  { id: 5, name: "Pasta", price: 9.99 },
  { id: 6, name: "Fried Chicken", price: 7.99 },
  { id: 7, name: "Grilled Cheese Sandwich", price: 4.99 },
  { id: 8, name: "Steak", price: 15.99 },
  { id: 9, name: "Caesar Salad", price: 6.99 },
  { id: 10, name: "Fish and Chips", price: 8.49 },
  { id: 11, name: "Ramen", price: 9.49 },
  { id: 12, name: "Burrito", price: 7.49 },
  { id: 13, name: "Pho", price: 8.99 },
  { id: 14, name: "Pad Thai", price: 9.99 },
  { id: 15, name: "Gyro", price: 6.49 },
  { id: 16, name: "Ice Cream", price: 3.99 },
  { id: 17, name: "Smoothie", price: 4.99 },
  { id: 18, name: "Apple Pie", price: 4.49 },
  { id: 19, name: "Chocolate Cake", price: 5.49 },
  { id: 20, name: "Pancakes", price: 4.99 },
  { id: 21, name: "Cupcake", price: 2.99 },
  { id: 22, name: "Crepes", price: 5.99 },
  { id: 23, name: "Club Sandwich", price: 6.99 },
  { id: 24, name: "Falafel", price: 5.49 },
  { id: 25, name: "Curry", price: 9.49 }
];

const foodPhotos = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-155150 began-1706-0344-5e4f?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-160 cattle-2517-0c1b?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-154 fried-2928-78f?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-155 noodles-?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1501446529957-6226bd447c46?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo- smoothie-?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo- applepie-?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo- cupcakes-?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo- crepes-?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo- falafel-?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo- curry-?auto=format&fit=crop&w=800&q=85"
];

// Curated valid photo URLs for dishes; unused/invalid source image URLs are replaced safely.
const photoByName = {
  "cheeseburger": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85",
  "pizza": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85",
  "tacos": "https://images.unsplash.com/photo-155150 began-1706-0344-5e4f?auto=format&fit=crop&w=800&q=85",
  "sushi": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=85",
  "pasta": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85",
  "fried chicken": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=85",
  "grilled cheese sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=85",
  "steak": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=85",
  "caesar salad": "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=85",
  "ramen": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=85",
  "burrito": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85",
  "chocolate cake": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
  "pancakes": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=85",
  "club sandwich": "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=800&q=85"
};

const state = { menu: [], cart: new Map(), isOrdering: false };
const $ = (selector) => document.querySelector(selector);
const money = (amount) => `$${Number(amount).toFixed(2)}`;

function normalizeItem(item, index) {
  const name = String(item.name || `Menu item ${index + 1}`);
  const normalized = {
    id: String(item.id ?? index + 1),
    name,
    price: Number(item.price) || 0,
    imgSrc: photoByName[name.toLowerCase()] || foodPhotos[index % foodPhotos.length]
  };
  return normalized;
}

async function getMenu() {
  try {
    const response = await fetch(MENU_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`Menu request failed (${response.status})`);
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("Menu data is empty");
    return data.map(normalizeItem);
  } catch (error) {
    console.warn("Could not fetch the online menu. Loading the built-in menu instead.", error);
    return fallbackMenu.map(normalizeItem);
  }
}

function renderMenu(items = state.menu) {
  const grid = $("#menu-grid");
  grid.innerHTML = "";
  $("#menu-count").textContent = `${items.length} items`;
  $("#empty-state").hidden = items.length !== 0;

  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "food-card";
    const image = document.createElement("img");
    image.className = "food-image";
    image.src = item.imgSrc;
    image.alt = item.name;
    image.loading = "lazy";
    image.onerror = () => {
      image.onerror = null;
      image.src = "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80";
    };

    const info = document.createElement("div");
    info.className = "food-info";
    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.name;
    const price = document.createElement("p");
    price.textContent = money(item.price);
    details.append(title, price);

    const add = document.createElement("button");
    add.className = "add-btn";
    add.type = "button";
    add.textContent = "+";
    add.setAttribute("aria-label", `Add ${item.name} to order`);
    add.addEventListener("click", () => addToCart(item.id));
    info.append(details, add);
    card.append(image, info);
    grid.append(card);
  });
}

function addToCart(id, amount = 1) {
  const key = String(id);
  const existing = state.cart.get(key);
  if (existing) existing.quantity += amount;
  else {
    const item = state.menu.find((menuItem) => menuItem.id === key);
    if (!item) return;
    state.cart.set(key, { ...item, quantity: amount });
  }
  renderCart();
}

function changeQuantity(id, delta) {
  const item = state.cart.get(String(id));
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) state.cart.delete(String(id));
  renderCart();
}

function renderCart() {
  const container = $("#cart-items");
  container.innerHTML = "";
  if (state.cart.size === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "Your cart is empty. Add something tasty!";
    container.append(empty);
  }
  let quantity = 0;
  let total = 0;
  state.cart.forEach((item) => {
    quantity += item.quantity;
    total += item.price * item.quantity;
    const row = document.createElement("div");
    row.className = "cart-row";
    const image = document.createElement("img");
    image.src = item.imgSrc;
    image.alt = "";
    const main = document.createElement("div");
    main.className = "cart-row-main";
    const name = document.createElement("strong");
    name.textContent = item.name;
    const sub = document.createElement("small");
    sub.textContent = `${money(item.price)} each`;
    main.append(name, sub);
    const controls = document.createElement("div");
    controls.className = "qty-controls";
    const minus = document.createElement("button");
    minus.type = "button"; minus.textContent = "−"; minus.setAttribute("aria-label", `Remove one ${item.name}`);
    minus.addEventListener("click", () => changeQuantity(item.id, -1));
    const qty = document.createElement("span"); qty.textContent = item.quantity;
    const plus = document.createElement("button");
    plus.type = "button"; plus.textContent = "+"; plus.setAttribute("aria-label", `Add one ${item.name}`);
    plus.addEventListener("click", () => changeQuantity(item.id, 1));
    controls.append(minus, qty, plus);
    row.append(image, main, controls);
    container.append(row);
  });
  $("#cart-count").textContent = quantity;
  $("#cart-total").textContent = money(total);
  $("#place-order-btn").disabled = state.isOrdering;
  $("#sample-order-btn").disabled = state.isOrdering;
}

function showDialog(title, message, icon = "🍽️") {
  $("#dialog-title").textContent = title;
  $("#dialog-text").textContent = message;
  $("#dialog-icon").textContent = icon;
  const dialog = $("#message-dialog");
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(`${title}\n\n${message}`);
}

function sleep(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

// Part 2: resolve after 2500ms with three randomly selected burger servings.
function TakeOrder() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      try {
        const burgerPool = state.menu.filter((item) => /burger/i.test(item.name));
        const pool = burgerPool.length ? burgerPool : state.menu.filter((item) => /sandwich/i.test(item.name));
        if (!pool.length) throw new Error("No burger items are available in the menu.");
        const burgers = Array.from({ length: 3 }, () => {
          const chosen = pool[Math.floor(Math.random() * pool.length)];
          return { ...chosen, quantity: 1 };
        });
        resolve({ order_status: true, paid: false, items: burgers });
      } catch (error) {
        reject(error);
      }
    }, 2500);
  });
}

// Part 3: resolve after 1500ms with the required preparation status.
function orderPrep(order) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ...order, order_status: true, paid: false }), 1500);
  });
}

// Part 4: resolve after 1000ms with the required payment status.
function payOrder(order) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ ...order, order_status: true, paid: true }), 1000);
  });
}

// Part 5: called only after payOrder resolves with paid:true.
function thankyouFnc() {
  showDialog("Thank you for your order!", "Payment successful. Your delicious food is being prepared. Thanks for choosing Your Restaurant.", "🎉");
}

function setStep(id, done) {
  const element = $(id);
  element.classList.toggle("done", done);
}

async function runOrderFlow() {
  if (state.isOrdering) return;
  if (state.cart.size === 0) {
    showDialog("Your cart is empty", "Add at least one dish to your order, or try the sample order.", "🛒");
    return;
  }

  state.isOrdering = true;
  renderCart();
  $("#status-message").textContent = "Sending your order to the kitchen…";
  $("#order-panel, #menu-grid, .hero, .menu-section .section-heading").forEach?.(() => {});
  $("#order-screen").hidden = false;
  $("#order-screen").scrollIntoView({ behavior: "smooth", block: "start" });
  $("#receipt-title").textContent = "Order received";
  $("#receipt-message").textContent = "We are sending your order to the kitchen.";
  $("#receipt-icon").textContent = "🍽️";
  $("#receipt-total").textContent = $("#cart-total").textContent;
  ["#step-order", "#step-prep", "#step-paid"].forEach((id) => setStep(id, false));

  try {
    // Run the required promise chain in order: TakeOrder -> orderPrep -> payOrder.
    const takenOrder = await TakeOrder();
    setStep("#step-order", true);
    $("#receipt-message").textContent = "Order received. The chef will start preparing it shortly.";
    $("#status-message").textContent = "Order received. Preparing your food…";

    const preparedOrder = await orderPrep(takenOrder);
    if (preparedOrder.order_status !== true || preparedOrder.paid !== false) {
      throw new Error("The order preparation status was not valid.");
    }
    setStep("#step-prep", true);
    $("#receipt-title").textContent = "Your food is ready for payment";
    $("#receipt-message").textContent = "The kitchen has prepared your sample order. Confirming payment…";
    $("#status-message").textContent = "Food prepared. Processing payment…";

    const paidOrder = await payOrder(preparedOrder);
    if (paidOrder.paid !== true) throw new Error("Payment could not be confirmed.");
    setStep("#step-paid", true);
    $("#receipt-title").textContent = "Order complete!";
    $("#receipt-message").textContent = "Your sample order has been paid successfully.";
    $("#receipt-icon").textContent = "✅";
    $("#status-message").textContent = "Payment successful.";
    thankyouFnc();
    state.cart.clear();
    renderCart();
  } catch (error) {
    console.error("Order flow failed:", error);
    $("#status-message").textContent = "Sorry, we couldn't complete the order. Please try again.";
    showDialog("Order could not be completed", error.message || "An unexpected error occurred. Please try again.", "⚠️");
  } finally {
    state.isOrdering = false;
    renderCart();
  }
}

function loadSampleOrder() {
  state.cart.clear();
  // A predictable UI demo cart; the TakeOrder promise still independently chooses three random burgers.
  const picks = state.menu.slice(0, Math.min(3, state.menu.length));
  picks.forEach((item) => state.cart.set(item.id, { ...item, quantity: 1 }));
  renderCart();
  $("#status-message").textContent = "Sample order loaded. Select Place order to run the promise chain.";
}

function setupEvents() {
  $("#search-input").addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    renderMenu(state.menu.filter((item) => item.name.toLowerCase().includes(query)));
  });
  $("#clear-order-btn").addEventListener("click", () => { state.cart.clear(); renderCart(); $("#status-message").textContent = ""; });
  $("#sample-order-btn").addEventListener("click", loadSampleOrder);
  $("#place-order-btn").addEventListener("click", runOrderFlow);
  $("#view-orders-btn").addEventListener("click", () => $("#orders").scrollIntoView({ behavior: "smooth" }));
  $("#back-to-menu").addEventListener("click", () => $("#home").scrollIntoView({ behavior: "smooth" }));
  $("#new-order-btn").addEventListener("click", () => {
    $("#order-screen").hidden = true;
    $("#status-message").textContent = "";
    $("#home").scrollIntoView({ behavior: "smooth" });
  });
  $("#signup-btn").addEventListener("click", () => showDialog("Create your account", "Signup is a demo interaction in this HTML, CSS, and JavaScript project.", "👋"));
  $("#login-btn").addEventListener("click", () => showDialog("Welcome back", "Login is a demo interaction. No account details are collected.", "🔑"));
  $("#dialog-close").addEventListener("click", () => $("#message-dialog").close());
  $("#dialog-ok").addEventListener("click", () => $("#message-dialog").close());
  document.querySelectorAll("nav a[data-info]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showDialog(link.textContent.replace(/^\d+\.\s*/, ""), link.dataset.info, "ℹ️");
    });
  });
}

async function init() {
  $("#year").textContent = new Date().getFullYear();
  setupEvents();
  try {
    state.menu = await getMenu();
    renderMenu();
    renderCart();
  } catch (error) {
    console.error("Unable to initialize menu:", error);
    $("#menu-grid").innerHTML = '<p class="empty-state">The menu could not be loaded. Refresh the page to try again.</p>';
  }
}

document.addEventListener("DOMContentLoaded", init);
