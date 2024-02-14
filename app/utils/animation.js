let eyes = document.querySelectorAll(".eye");
let eyeRect = eyes[0].getBoundingClientRect();
let container = document.querySelector(".eyes-container");

function eyesFollow(e) {
  requestAnimationFrame(() => {
    let xPos = e.pageX;
    let yPos = e.pageY;

    let xDiff = eyeRect.x + eyeRect.width / 2 - xPos;
    let yDiff = eyeRect.y + eyeRect.height / 2 - yPos;

    let angle = (Math.atan2(yDiff, xDiff) * 180) / Math.PI;

    container.style.setProperty("--eyeAngle", angle.toFixed(2) + "deg");
  });
  console.log("hola");
}
