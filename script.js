// Récupération des éléments HTML5 button
const questionTogglers = document.querySelectorAll(".faq__question-toggler");

// Déclaration de la fonction handleQuestionToggle qui va permettre de gerér l'ouverture et la fermeture des réponses aux questions du faq
const handleQuestionToggle = (e) => {
  // Création de la constante toggler
  const toggler = e.target;
  const contentToToggle = document.getElementById(
    toggler.getAttribute("aria-controls")
  );

  // Récupération de l'icone
  const iconToAnimate = toggler.querySelector(".faq__question-toggler-icon");
  // Si le status du toggler est true découverte de la réponse sinon le réponse reste cachée
  const toggledState =
    toggler.getAttribute("aria-expanded") === "true" ? true : false;

  //Basculer entre l'ajout et la suppression de la classe faq__content-container--active pour la réponse
  contentToToggle.classList.toggle("faq__content-container--active");
  toggler.setAttribute("aria-expanded", toggledState ? false : true);
  //Basculer entre l'ajout et la suppression de la classe faq__question-toggler-icon--active pour l'icone
  iconToAnimate.classList.toggle("faq__question-toggler-icon--active");
};

// Pour chaque bouton
questionTogglers.forEach((toggler) =>
  // Ecoute de l'événement "click" et appel de la fonction handleQuestionToggle
  toggler.addEventListener("click", handleQuestionToggle)
);
