document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez les éléments nécessaires
  const bestseller = document.getElementById("bestseller");
  const nouveautes = document.getElementById("Nouveautés");

  // Cacher la section Nouveautés au chargement de la page
  nouveautes.style.display = "none";

  // Fonction pour afficher la section Bestseller
  function afficherBestseller() {
    bestseller.style.display = "block";
    nouveautes.style.display = "none";
  }

  // Fonction pour afficher la section Nouveautés
  function afficherNouveautes() {
    bestseller.style.display = "none";
    nouveautes.style.display = "block";
  }

  // Ajoutez les écouteurs d'événements aux liens
  const bestsellerLink = document.querySelector(".navbar a:nth-child(2) p");
  const nouveautesLink = document.querySelector(".navbar a:nth-child(3) p");

  bestsellerLink.addEventListener("click", function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien
    afficherBestseller();
  });

  nouveautesLink.addEventListener("click", function (e) {
    e.preventDefault(); // Empêcher le comportement par défaut du lien
    afficherNouveautes();
  });
});

// bouton wishlist et panier
// Sélectionnez tous les divs avec la classe "article"
var articles = document.querySelectorAll(".article");

// Pour chaque div
articles.forEach(function (article) {
  // Ajoutez un écouteur d'événements "mouseover"
  article.addEventListener("mouseover", function () {
    // Affichez les boutons
    var wishlistButton = article.querySelector(".wishlist-button");
    var cartButton = article.querySelector(".cart-button");
    wishlistButton.style.display = "block";
    cartButton.style.display = "block";
  });

  // Ajoutez un écouteur d'événements "mouseout"
  article.addEventListener("mouseout", function () {
    // Cachez les boutons
    var wishlistButton = article.querySelector(".wishlist-button");
    var cartButton = article.querySelector(".cart-button");
    wishlistButton.style.display = "none";
    cartButton.style.display = "none";
  });
});

// Sélectionnez tous les boutons "wishlist" et "panier"
var wishlistButtons = document.querySelectorAll(".wishlist-button");
var cartButtons = document.querySelectorAll(".cart-button");

// Pour chaque bouton "wishlist"
wishlistButtons.forEach(function (button) {
  // Ajoutez un écouteur d'événements "click"
  button.addEventListener("click", function () {
    // Récupérez le titre de l'article
    var title = button.parentElement.querySelector("h2").innerText;
    // Ajoutez le titre à la liste "wishlist"
    var wishlistMenu = document.querySelector("#wishlist-menu");
    var listItem = document.createElement("li");
    listItem.innerText = title;
    // Ajoutez un bouton "supprimer"
    var removeButton = document.createElement("button");
    removeButton.innerText = "Supprimer";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", function () {
      wishlistMenu.removeChild(listItem);
    });
    listItem.appendChild(removeButton);
    wishlistMenu.appendChild(listItem);
  });
});

// Pour chaque bouton "panier"
cartButtons.forEach(function (button) {
  // Ajoutez un écouteur d'événements "click"
  button.addEventListener("click", function () {
    // Récupérez le titre de l'article
    var title = button.parentElement.querySelector("h2").innerText;
    // Ajoutez le titre à la liste "panier"
    var cartMenu = document.querySelector("#cart-menu");
    var listItem = document.createElement("li");
    listItem.innerText = title;
    // Ajoutez un bouton "supprimer"
    var removeButton = document.createElement("button");
    removeButton.innerText = "Supprimer";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", function () {
      cartMenu.removeChild(listItem);
    });
    listItem.appendChild(removeButton);
    cartMenu.appendChild(listItem);
  });
});
