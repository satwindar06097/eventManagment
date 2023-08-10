const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const ecards = document.querySelector(".ecards");

let currentPosition = 0;

prevBtn.addEventListener("click", () => {
  currentPosition += 250;
  if (currentPosition > 0) currentPosition = 0;
  ecards.style.transform = `translateX(${currentPosition}px)`;
});

nextBtn.addEventListener("click", () => {
  const containerWidth = ecards.offsetWidth;
  const cardsWidth = ecards.scrollWidth;
  currentPosition -= 250;
  if (currentPosition < -(cardsWidth - containerWidth))
    currentPosition = -(cardsWidth - containerWidth);
  ecards.style.transform = `translateX(${currentPosition}px)`;
});
