import { useEffect } from "react";
import Typed from "typed.js";

export default function usePortfolioInteractions() {
  useEffect(() => {
    const typingEffect = new Typed(".hero__text-changing", {
      strings: ["Bryan Richard Vandas.", "Programátor.", "Dizajnér."],
      loop: true,
      typeSpeed: 90,
      backSpeed: 60,
      backDelay: 1500,
    });

    const handleClick = (event) => {
      const iconTarget = event.target.closest(".navigation__icon");
      if (iconTarget) {
        const navBar = document.querySelector(".navigation");
        const buttonContainer = iconTarget.closest(
          ".navigation__button-mobile",
        );
        const navOpen = buttonContainer?.querySelector(
          ".navigation__icon--open",
        );
        const navClose = buttonContainer?.querySelector(
          ".navigation__icon--close",
        );

        if (iconTarget.matches(".navigation__icon--open")) {
          navOpen?.classList.toggle("hide");
          navBar?.classList.toggle("hide");
          navClose?.classList.toggle("hide");
        }

        if (iconTarget.matches(".navigation__icon--close")) {
          navClose?.classList.toggle("hide");
          navBar?.classList.toggle("hide");
          navOpen?.classList.toggle("hide");
        }
      }

      const scrollTarget = event.target.closest(".scroll-to");
      if (!scrollTarget) return;

      if (scrollTarget.dataset.home === "home") {
        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
      }

      if (scrollTarget.dataset.about === "about") {
        document
          .querySelector("#about")
          ?.scrollIntoView({ behavior: "smooth" });
      }

      if (scrollTarget.dataset.portfolio === "portfolio") {
        document
          .querySelector("#portfolio")
          ?.scrollIntoView({ behavior: "smooth" });
      }

      if (scrollTarget.dataset.contact === "contact") {
        document
          .querySelector("#contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const revealItems = () => {
      const boxes = document.querySelectorAll(".reveal-box");
      const primaryBox = document.querySelector(".reveal-box--primary");
      const primaryBoxIndex = document.querySelector(".aboutme__box--primary");
      const trigger = window.innerHeight - 150;

      if (primaryBox && primaryBoxIndex) {
        const topPrimaryBox = primaryBox.getBoundingClientRect().top;

        if (topPrimaryBox < trigger) {
          primaryBox.classList.add("reveal--primary");
          primaryBoxIndex.style.zIndex = "5";
        } else {
          primaryBox.classList.remove("reveal--primary");
          primaryBoxIndex.style.zIndex = "-1";
        }
      }

      boxes.forEach((box) => {
        const top = box.getBoundingClientRect().top;

        if (top < trigger) {
          box.classList.add("reveal");
        } else {
          box.classList.remove("reveal");
        }
      });
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", revealItems);
    revealItems();

    const year = document.querySelector("[data-year-update]");
    if (year) {
      year.innerText = new Date().getFullYear();
    }

    return () => {
      typingEffect.destroy();
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", revealItems);
    };
  }, []);
}
