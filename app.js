const burger = document.querySelector(".burger");
const html = document.querySelector("html");
const navLinks = document.querySelector("nav ul");
const projectCard = document.querySelector(".project-card");
const projectCover = document.querySelector(".project-cover");
const projectCardTwo = document.querySelector(".cardTwo");
const projectCoverTwo = document.querySelector(".project-cover-two");
const projectCardThree = document.querySelector(".cardThree");
const projectCoverThree = document.querySelector(".project-cover-three");
const showUp = document.querySelector(".show-up");
const showUp2 = document.querySelector(".show-up-two");
const showUp3 = document.querySelector(".show-up-three");


function topFunction(){
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //Chrome,Firefox,Opera etc
}

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  html.classList.toggle("no-scroll");
});

projectCard.addEventListener("click", () => {
  projectCover.classList.toggle("coverslide");
  showUp.classList.toggle("show-up-anim");
});

projectCardTwo.addEventListener("click", () => {
  projectCoverTwo.classList.toggle("coverslideTwo");
  showUp2.classList.toggle("show-up-anim");
});

projectCardThree.addEventListener("click", () => {
  projectCoverThree.classList.toggle("coverslideThree");
  showUp3.classList.toggle("show-up-anim");
});
