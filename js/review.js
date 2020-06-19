import { data } from './data.js';
import { fillStars, clearStars } from './stars.js';

const review_container = document.getElementById("review_container");
const close_button = document.getElementById("close");
const spine_images = document.querySelectorAll(".spine_img");

const fillReview = (i) => {
  const book = data[i];
  title.innerHTML = book.title;
  author.innerHTML = `by ${book.author}`;
  review.innerHTML = book.review;
  cover.innerHTML = `<img class="cover_image" src="${book.image}"></img>`;
  fillStars(book.stars);
}

const showReview = (i) => {
  fillReview(i);
  review_container.classList.remove("hide_review");
}

const closeReview = () => {
  review_container.classList.add("hide_review");
  title.innerHTML = "";
  author.innerHTML = "";
  review.innerHTML = "";
  cover.innerHTML = "";
  clearStars();
}

close_button.addEventListener("click", closeReview);

spine_images.forEach((image, index) => image.addEventListener("click", () => showReview(index)));


