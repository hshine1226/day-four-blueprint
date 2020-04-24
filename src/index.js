// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const color = ["#f1c40f", "#9b59b6", "#3498db"];
const body = document.querySelector("body");
const BIG_SCREEN = "bigScreen",
  MIDIUM_SCREEN = "midiumScreen",
  SMALL_SCREEN = "smallScreen";

function handleBodyColor() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.remove(MIDIUM_SCREEN, SMALL_SCREEN);
    body.classList.add(BIG_SCREEN);
  } else if (width > 500 && width < 1000) {
    body.classList.remove(SMALL_SCREEN, BIG_SCREEN);
    body.classList.add(MIDIUM_SCREEN);
  } else {
    body.classList.remove(MIDIUM_SCREEN, BIG_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

/*function handleInnerWidth() {
  const intViewportWidth = window.innerWidth;
  if (intViewportWidth > 1200) {
    body.style.backgroundColor = color[0];
  } else if (intViewportWidth > 500) {
    body.style.backgroundColor = color[1];
  } else {
    body.style.backgroundColor = color[2];
  }
}

window.addEventListener("resize", handleInnerWidth);*/

window.addEventListener("resize", handleBodyColor);
