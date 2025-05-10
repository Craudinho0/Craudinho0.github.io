// ========== 1. Tilt effect using VanillaTilt ==========
const tiltCard = document.querySelector(".card-style");
if (tiltCard) {
  VanillaTilt.init(tiltCard, {
    max: 20,
    speed: 1000,
    reverse: true,
    perspective: 2000,
    easing: "cubic-bezier(0.0, 0, 0.2, 1)",
  });
}

// ========== 2. Card flip (front and back) ==========
const card = document.querySelector(".card");
const frontButton = document.querySelector(".front-button");
const backButton = document.querySelector(".back-button");

if (card && frontButton) {
  frontButton.addEventListener("click", () => {
    card.classList.toggle("front");
  });
}

if (card && backButton) {
  backButton.addEventListener("click", () => {
    card.classList.toggle("front");
  });
}

// ========== 3. Copy text to clipboard ==========
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      const alertBox = document.getElementById("alert");
      if (alertBox) {
        alertBox.style.display = "block";
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 2000);
      }
    })
    .catch((err) => {
      console.error("Failed to copy text:", err);
    });
}

// ========== 4. Disable right-click on background video ==========
const video = document.getElementById("video-background");
if (video) {
  video.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

// ========== 5. Typing animation using TypeIt ==========
document.addEventListener("DOMContentLoaded", () => {
  const typeTarget = document.querySelector(".services-bio");
  if (typeTarget) {
    new TypeIt(typeTarget, {
      speed: 200,
      loop: true,
    })
      .type("sou ", { delay: 100 })
      .type("um developer,", { delay: 15000 })
      .delete(17)
      .type("web developer", { delay: 15000 })
      .delete(13)
      .type("e gamer!", { delay: 15000 })
      .delete(8)
      .go();
  }
});
