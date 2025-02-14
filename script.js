let colorBtn = document.querySelector(".jsChangeColor");
let body = document.querySelector("body")
let headingColorText = document.querySelector(".jsHeadingColor")

function randomNumber() {
  let number = Math.floor(Math.random() * 256);
  return number;
}

colorBtn.addEventListener("click", () => {
  body.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
  headingColorText.textContent = `${body.style.backgroundColor}`
})
