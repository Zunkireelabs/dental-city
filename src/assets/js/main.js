import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import Lenis from "lenis";

Alpine.plugin(collapse);
window.Alpine = Alpine;
Alpine.start();

const lenis = new Lenis({ autoRaf: true });

const revealEls = document.querySelectorAll("[data-reveal]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  observer.observe(el);
});
