let colorBtn = document.querySelector(".jsChangeColor");
let body = document.querySelector("body");
let headingColorText = document.querySelector(".jsHeadingColor");

function randomColor() {
  let values = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * 16)];
  }
  return color;
}

colorBtn.addEventListener("click", () => {
  headingColorText.textContent = `${randomColor()}`;
  body.style.backgroundColor = `${headingColorText.textContent}`;
});
