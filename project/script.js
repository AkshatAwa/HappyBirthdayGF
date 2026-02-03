const reveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("DOMContentLoaded", () => {
  reveals.forEach((element, index) => {
    const delay = 120 + index * 120;
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, delay);
  });
});
