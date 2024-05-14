// app.js
const contentDiv = document.getElementById("content");

function loadHome() {
  contentDiv.innerHTML = "<h1>Welcome to our restaurant!</h1>";
}

function loadMenu() {
  fetch("/api/menu")
    .then((response) => response.json())
    .then((menuItems) => {
      let html = "<h1>Menu</h1>";
      menuItems.forEach((item) => {
        html += `
          <div>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
          </div>
        `;
      });
      contentDiv.innerHTML = html;
    });
}

function loadOrder() {
  contentDiv.innerHTML = "<h1>Order</h1><form>...</form>";
}

// Initial page load
loadHome();

// Navigation
window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  if (path === "/") {
    loadHome();
  } else if (path === "/menu") {
    loadMenu();
  } else if (path === "/order") {
    loadOrder();
  }
});

document.querySelector("nav").addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, "", path); // corrected pushState call
    if (path === "/") {
      loadHome();
    } else if (path === "/menu") {
      loadMenu();
    } else if (path === "/order") {
      loadOrder();
    }
  }
});
