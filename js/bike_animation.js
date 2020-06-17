const box = document.getElementById("back_container");
const wheel = document.getElementById("wheel");

let deg = -1;
const moveAndRotate = (obj, img) => {
  const current = parseInt(obj.style.left.replace("px", ""), 10);
  if (current > 0) {
    obj.style = `left: ${current - 1}px`;
    img.style = `transform: rotate(${deg}deg)`;
    deg--;
  }
  else return;
}

window.addEventListener("load", function() {
  setInterval(moveAndRotate, 10, box, wheel);
})

