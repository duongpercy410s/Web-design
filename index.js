const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");

let count = parseInt(localStorage.getItem("likeCount")) || 0;

likeCount.textContent = count + " likes";

likeBtn.addEventListener("click", function () {
  count++;
  likeCount.textContent = count + " likes";

  localStorage.setItem("likeCount", count);
});
// ------------------------------------------------------------
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
  count = 0;
  likeCount.textContent = count + " likes";
  localStorage.setItem("likeCount", count);
});

// ----------------------------------------------------------
const dislikeBtn = document.getElementById("dislike-btn");
const dislikeCount = document.getElementById("dislike-count");

let discount = parseInt(localStorage.getItem("dislikeCount")) || 0;

dislikeCount.textContent = discount + " dislikes";

dislikeBtn.addEventListener("click", function () {
  discount++;
  dislikeCount.textContent = discount + " dislikes";

  localStorage.setItem("dislikeCount", discount);
});
// -----------------------------------------------------------
const resetBtn2 = document.getElementById("reset-btn2");
resetBtn2.addEventListener("click", function () {
  discount = 0;
  dislikeCount.textContent = discount + " dislikes";
  localStorage.setItem("dislikeCount", discount);
});
