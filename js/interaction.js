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
//fonction pour obtenir les pages
var boutonpage1 = document.getElementById("page1");
var boutonpage2 = document.getElementById("page2");
var boutonpage3 = document.getElementById("page3");
var grille1 = document.getElementsByClassName("grille");
var grille2 = document.getElementsByClassName("grille__2");
var grille3 = document.getElementsByClassName("grille__3");
let arrgrilles = [grille1, grille2, grille3];
var boutonpageSuivante = document.getElementById("pageSuivante");
var boutonpagePrecedente = document.getElementById("pagePrecedente");
let intcompteur = 0;
let Arrboutons = [boutonpage1, boutonpage2, boutonpage3, boutonpageSuivante, boutonpagePrecedente]
//evenement 
boutonpageSuivante.addEventListener('click', incrementdegrille);
boutonpagePrecedente.addEventListener('click', decrementdegrille);
function incrementdegrille() {
    intcompteur++;
    if (intcompteur > 2) {
        intcompteur = 0;
    }
    for (let i = 0; i < arrgrilles.length; i++) {
        if (i === intcompteur) {
            arrgrilles[i][0].style.display = "grid";
        } else {
            arrgrilles[i][0].style.display = "none";
        }
    }

    indicateurdepage(intcompteur);
}
function decrementdegrille() {
    intcompteur--;
    if (intcompteur < 0) {
        intcompteur = arrgrilles.length - 1;
    }
    for (let i = 0; i < arrgrilles.length; i++) {
        if (i === intcompteur) {
            arrgrilles[i][0].style.display = "grid";
        } else {
            arrgrilles[i][0].style.display = "none";
        }
    }
    indicateurdepage(intcompteur);
}
boutonpage1.addEventListener('click', () => {
    intcompteur = 0;
    grille2[0].style.display = "none";
    grille1[0].style.display = "grid";
    grille3[0].style.display = "none";

    indicateurdepage(intcompteur);
});
boutonpage2.addEventListener('click', () => {
    intcompteur = 1;
    grille2[0].style.display = "grid";
    grille1[0].style.display = "none";
    grille3[0].style.display = "none";

    indicateurdepage(intcompteur);
});
boutonpage3.addEventListener('click', () => {
    intcompteur = 2;
    indicateurdepage(intcompteur);
    grille3[0].style.display = "grid";
    grille1[0].style.display = "none";
    grille2[0].style.display = "none";


});



function indicateurdepage(index) {
    for (let i = 0; i < arrgrilles.length; i++) {
        var bouton = document.getElementById("page" + (i + 1));

        if (i == index) {
            bouton.classList.add("is-active");
        } else {
            bouton.classList.remove("is-active");
        }
    }

}
indicateurdepage(intcompteur);
