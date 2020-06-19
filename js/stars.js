const stars = document.querySelectorAll(".star");

const yellowStar = (i) => {
  console.log("yellow " + i);
  const star = stars[i];
  star.classList.remove("fa-star-o");
  star.classList.add("fa-star");
  star.style = "color: yellow";
}

export const fillStars = (n) => {
  console.log("filling stars");
  let index;
  while (n > 0) {
    index = n - 1;
    yellowStar(index);
    n--;
  } 
}

export const clearStars = () => {
  stars.forEach(star => {
    star.classList.remove("fa-star");
    star.classList.add("fa-star-o");
    star.style = "color: #ddd";
  })
}

