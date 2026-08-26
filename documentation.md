# Documentation pour le TP1

1. Structure des dossiers
2. [Architecture des fichiers css](#2-architecture-des-fichiers-css)
3. [Utilisation de @layer](#3-utilisation-de-layer)
4. [Nomenclature BEM](#4-nomenclature-bem)
5. [ARIA](#5-aria)

## 1. Structure des dossiers

<pre>
tp1/
├── index.html  
├── style.css  
├── css/  
│ ├── settings/
│ │ └── variables.css
│ ├── base/
│ │ ├── normalize.css
│ │ └── typography.css
│ ├── layout/
│ │ └── grid.css
│ └── components/
│ │ ├── menu.css
│ │ └── accordeon.css
│ │ └── modale.css
├── js/
│ └── menu.js
│ └── accordeon.js
│ └── modale.js
└── img/
│ ├── logo.svg
│ └── hero-background.webp  
</pre>

## 2. Architecture des fichiers CSS

Le fichier principal qui importe tous les autres
à la racine de votre projet :

**style.css**

| Sous-dossier        |  Description                                                      |
| ------------------- | ----------------------------------------------------------------- |
| css/**settings**/   | Variables globales (couleurs, polices, espacements)               |
| css/**base**/       | Normalisation, réinitialisation des styles et typographie de base |
| css/**layout**/     | Mise en page globale (grilles, structure des pages, en-pied)      |
| css/**components**/ | Éléments réutilisables (boutons, cartes, formulaires)             |

## 3. Utilisation de @layer

L'instruction @layer (ou couches de cascade) est une fonctionnalité majeure du CSS natif qui permet de regrouper vos styles dans des calques étanches pour contrôler leur ordre de priorité, peu importe la force ou la précision de vos sélecteurs (la spécificité).

Observer le fichier [style.css](style.css) pour comprendre l'utilisation des @layer.

## 4. Nomenclature BEM

**Exemple du menu réactif accessible** 

| Balise   |  Classe                    | BEM          |
| -------- | -------------------------- | ------------ |
| `nav`    | nav-menu                   | Bloc         |
| `button` | nav-menu\_\_toggle         | Élément      |
| `button` | nav-menu\_\_toggle--open   | Modificateur |
| `span`   | nav-menu\_\_hamburger-icon | Élément      |
| `span`   | nav-menu\_\_libelle        | Élément      |
| `ul`     | nav-menu\_\_list           | Élément      |
| `li`     | nav-menu\_\_item           | Élément      |
| `a`      | nav-menu\_\_link           | Élément      |

## 5. ARIA

| Balise     | Attribut ARIA   | Valeur de l'attribut ARIA      | Bref commentaire explicatif au besoin\_\_                                                                                         |
| :--------- | :-------------- | :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `<nav>`    | `aria-label`    | `Navigation principale`        | Permet aux lecteurs d'écran de distinguer ce menu s'il y a d'autres zones de navigation dans la page.                             |
| `<button>` | `aria-expanded` | `false` (ou `true`)            | Indique dynamiquement aux utilisateurs de technologies d'assistance si le menu déroulant est actuellement fermé ou ouvert.        |
| `<button>` | `aria-controls` | `nav-menu-list`                | Lie techniquement le bouton à la liste `<ul>` qu'il contrôle en ciblant l'identifiant (`id`) de cette dernière.                   |
| `<button>` | `aria-label`    | `Ouvrir le menu de navigation` | Fournit une description textuelle claire de l'action du bouton, mise à jour par le JavaScript lors de la fermeture ("Fermer..."). |
| `<span>`   | `aria-hidden`   | `true`                         | Masque complètement l'icône graphique des liseuses d'écran pour éviter les annonces vocales redondantes ou inutiles.              |
