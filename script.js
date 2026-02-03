const reveals = Array.from(document.querySelectorAll(".reveal"));

const setupAudio = () => {
  const audio = document.getElementById("bg-music");
  if (!audio) {
    return;
  }
  audio.volume = 0.18;
  const playAttempt = audio.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
};

const setupHearts = () => {
  const container = document.querySelector(".floating-hearts");
  if (!container) {
    return;
  }

  const total = 16;
  for (let i = 0; i < total; i += 1) {
    const heart = document.createElement("span");
    const size = 12 + Math.random() * 18;
    const duration = 12 + Math.random() * 10;
    const delay = Math.random() * -12;
    const left = Math.random() * 100;
    const opacity = 0.15 + Math.random() * 0.3;
    const blur = Math.random() * 1.2;

    heart.style.setProperty("--size", `${size}px`);
    heart.style.setProperty("--duration", `${duration}s`);
    heart.style.setProperty("--delay", `${delay}s`);
    heart.style.setProperty("--left", `${left}%`);
    heart.style.setProperty("--opacity", opacity.toFixed(2));
    heart.style.setProperty("--blur", `${blur.toFixed(2)}px`);

    container.appendChild(heart);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  reveals.forEach((element, index) => {
    const delay = 120 + index * 120;
    window.setTimeout(() => {
      element.classList.add("is-visible");
    }, delay);
  });

  setupAudio();
  setupHearts();
});
