//dice random number
let randomNum1 = Math.trunc(Math.random() * 6) + 1;
let randomNum2 = Math.trunc(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

let winnerText = document.querySelector("h1");

let refreshButton = document.querySelector("button");

refreshButton.addEventListener("click", function () {
  img1.setAttribute("src", `images/dice${randomNum1}.png`);
  img2.setAttribute("src", `images/dice${randomNum2}.png`);

  if (randomNum1 > randomNum2) {
    winnerText.textContent = " 🚩 Player 1 Wins!";
  } else if (randomNum1 === randomNum2) {
    winnerText.textContent = " 🚩 It's a Draw 🚩";
  } else {
    winnerText.textContent = " Player 2 Wins! 🚩";
  }

  refreshButton.classList.add("hidden");
});
