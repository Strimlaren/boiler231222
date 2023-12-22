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

lucka24.addEventListener("click", () => {
  our_form.classList.add("show-form");
});
