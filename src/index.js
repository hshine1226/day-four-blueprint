// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const color = ["#f1c40f", "#9b59b6", "#3498db"];
const body = document.querySelector("body");

function handleInnerWidth(){
    const intViewportWidth = window.innerWidth;
    if (intViewportWidth > 1200) {
        body.style.backgroundColor = color[0];
    }
    else if (intViewportWidth > 500){
        body.style.backgroundColor = color[1];
    }
    else{
        body.style.backgroundColor = color[2];
    }
}

window.addEventListener("resize", handleInnerWidth);