const typingEffect = new Typed(".hero__text-changing", {
  strings: ["Bryan Richard Vandas.", "Programátor.", "Dizajnér."],
  loop: true,
  typeSpeed: 90,
  backSpeed: 60,
  backDelay: 1500,
});

// Navigation
document.addEventListener("click", (e) => {
  if (!e.target.matches(".navigation__icon")) return;
  const navBar = document.querySelector(".navigation");
  const buttonContainer = e.target.closest(".navigation__button-mobile");
  const navOpen = buttonContainer.querySelector(".navigation__icon--open");
  const navClose = buttonContainer.querySelector(".navigation__icon--close");

  if (e.target.matches(".navigation__icon--open")) {
    navOpen.classList.toggle("hide");
    navBar.classList.toggle("hide");
    navClose.classList.toggle("hide");
  }

  if (e.target.matches(".navigation__icon--close")) {
    navClose.classList.toggle("hide");
    navBar.classList.toggle("hide");
    navOpen.classList.toggle("hide");
  }
});

// ScrollTo
document.addEventListener("click", (e) => {
  if (!e.target.matches(".scroll-to")) return;

  if (e.target.dataset.home === "home") {
    const home = document.querySelector("#home");
    home.scrollIntoView({ behavior: "smooth" });
  }

  if (e.target.dataset.about === "about") {
    window.scroll({ top: 500, behavior: "smooth" });
  }

  if (e.target.dataset.portfolio === "portfolio") {
    const portfolio = document.querySelector("#portfolio");
    portfolio.scrollIntoView({ behavior: "smooth" });
  }

  if (e.target.dataset.contact === "contact") {
    const contact = document.querySelector("#contact");
    contact.scrollIntoView({ behavior: "smooth" });
  }
});
// Reveal Items
const boxes = document.querySelectorAll(".reveal-box");
const primaryBox = document.querySelector(".reveal-box--primary");
const primaryBoxIndex = document.querySelector(".aboutme__box--primary");
window.addEventListener("scroll", revealItems);

revealItems();

function revealItems() {
  const trigger = window.innerHeight - 150;

  const topPrimaryBox = primaryBox.getBoundingClientRect().top;
  if (topPrimaryBox < trigger) {
    primaryBox.classList.add("reveal--primary");
    primaryBoxIndex.style.zIndex = "5";
  } else {
    primaryBox.classList.remove("reveal--primary");
    primaryBoxIndex.style.zIndex = "-1";
  }

  boxes.forEach((box) => {
    const top = box.getBoundingClientRect().top;

    if (top < trigger) {
      box.classList.add("reveal");
    } else {
      box.classList.remove("reveal");
    }
  });
}

// update year
const year = document.querySelector("[data-year-update]");
year.innerText = new Date().getFullYear();
