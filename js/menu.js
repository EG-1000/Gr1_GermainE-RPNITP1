/* MENU RÉACTIF ET ACCESSIBLE */

let boutonToggle = document.querySelector(".nav-menu__toggle");
let listeMenu = document.querySelector(".nav-menu__list");
let listeMinu = document.querySelector(".nav-minu__lest")
if (boutonToggle && listeMenu) {
  // On cible le texte à l'intérieur du bouton
  let libelleTexte = boutonToggle.querySelector(".nav-menu__libelle");

  if (libelleTexte) {
    // 1. ÉCOUTE DE L'ÉVÉNEMENT CLIC
    boutonToggle.addEventListener("click", function () {
      let estOuvert = boutonToggle.getAttribute("aria-expanded");

      // Si le menu est ouvert, on va le fermer
      if (estOuvert === "true") {
        boutonToggle.setAttribute("aria-expanded", "false");
        boutonToggle.setAttribute("aria-label", "Ouvrir le menu de navigation");
        libelleTexte.textContent = "Menu";

        // CORRECTION : On retire la classe pour retransformer le X en Hamburger
        boutonToggle.classList.remove("nav-menu__toggle--open");
      }
      // Si le menu est fermé, on va l'ouvrir
      else {
        boutonToggle.setAttribute("aria-expanded", "true");
        boutonToggle.setAttribute("aria-label", "Fermer le menu de navigation");
        libelleTexte.textContent = "Fermer";

        // CORRECTION : On ajoute la classe pour métamorphoser le Hamburger en X
        boutonToggle.classList.add("nav-menu__toggle--open");
      }
    });

    // 2. ÉCOUTE DU CLAVIER (ACCESSIBILITÉ WCAG : TOUCHE ÉCHAP)
    document.addEventListener("keydown", function (evenement) {
      if (evenement.key === "Escape") {
        // Si le menu est ouvert au moment d'appuyer sur Échap
        if (boutonToggle.getAttribute("aria-expanded") === "true") {
          boutonToggle.setAttribute("aria-expanded", "false");
          boutonToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu de navigation",
          );
          libelleTexte.textContent = "Menu";

          // Réinitialisation de l'icône et focus de sécurité
          boutonToggle.classList.remove("nav-menu__toggle--open");
          boutonToggle.focus();
        }
      }
    });
  }
}
