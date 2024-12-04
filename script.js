const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");

let hoverCount = 0;

noButton.addEventListener("mouseover", () => {
  hoverCount++;

  if (hoverCount === 1) {
    message.textContent = "AYYYYYY profeee no sea mala ;v";
  } else if (hoverCount === 2) {
    message.textContent = "Ya pues profe se q quiere xdd";
  } else if (hoverCount >= 3) {
    moveNoButton();
    message.textContent = "Ni modo profe usted me obligo a esto";
  }
});

yesButton.addEventListener("click", () => {
  message.textContent = "¡Gracias, profe ahora si podre salvar el año y pasar a tercero";
});

function moveNoButton() {
  const x = Math.random() * 200 - 100; // Movimiento horizontal aleatorio
  const y = Math.random() * 200 - 100; // Movimiento vertical aleatorio

  noButton.style.transform = `translate(${x}px, ${y}px)`;
}
