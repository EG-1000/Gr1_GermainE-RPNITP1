// 1. Sélection des éléments HTML par leur identifiant
var toggleBtn = document.getElementById("btn-toggle-form");
var filterForm = document.getElementById("filter-form");
var openDocument = document.getElementsByTagName("details");

// 2. Écoute du clic sur le bouton avec une fonction classique
toggleBtn.addEventListener("click", function () {
    // 3. On récupère la valeur actuelle de l'attribut (qui est une chaîne de caractères)
    var currentAttribute = toggleBtn.getAttribute("aria-expanded");

    // 4. Structure conditionnelle standard (Pas de ternaire)
    if (currentAttribute === "true") {
        // Si le formulaire était affiché, on le cache
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.textContent = "Afficher les filtres";
        filterForm.classList.add("is-hidden");
    } else {
        // Si le formulaire était caché, on l'affiche
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.innerHTML = "<img src='images/icones/masquer_filtres.png' alt='icon'>" + " Masquer les filtres";
        filterForm.classList.remove("is-hidden");
    }
});
//fonction pour obtenir la page 2
var boutonpage1 = document.getElementById("page1");
var boutonpage2 = document.getElementById("page2");
var grille1 = document.getElementsByClassName("grille");
var grille2 = document.getElementsByClassName("grille__2");
var grille3 = document.getElementsByClassName("grille__3");
boutonpage1.addEventListener('click', () => {
    grille2[0].style.display = "none";
    grille1[0].style.display = "grid";
    grille3[0].style.display = "none";
});
boutonpage2.addEventListener('click', () => {
    grille2[0].style.display = "grid";
    grille1[0].style.display = "none";
    grille3[0].style.display = "none";
});
var boutonpage3 = document.getElementById("page3");
boutonpage3.addEventListener('click', () => {
    grille3[0].style.display = "grid";
    grille1[0].style.display = "none";
    grille2[0].style.display = "none";
});
