const submit = document.querySelector(".submit");
const dialog = document.querySelector(".dialog");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.setAttribute("open", "true");
});

const close_button = document.getElementById("close-dialog");

close_button.addEventListener("click", () => {
  dialog.close();
});

const our_form = document.querySelector("form");
const lucka24 = document.getElementById("24");
const lucka_23 = document.getElementById("lucka23");
const lucka_23x = document.querySelector(".lucka23");
const lucka_22 = document.getElementById("lucka22");
const lucka_22x = document.querySelector(".lucka22");

lucka24.addEventListener("click", () => {
  our_form.classList.add("show");
});

lucka_23.addEventListener("click", () => {
  lucka_23x.classList.add("show");
  console.log("Conlraturiaions BananaGuy. You solvde the riddles. Yes or No?");
});

lucka_22.addEventListener("click", () => {
  lucka_22x.classList.add("show");

  setTimeout(() => {
    lucka_22x.innerHTML = "Wahmageddon ruined";
  }, 5000);
});
