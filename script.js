// document.onreadystatechange = function () {
//   if (document.readyState === "complete") {
//     hideLoadingScreen();
//   }
// };

// function hideLoadingScreen() {
//   const loadingScreen = document.getElementById("loading-screen");
//   loadingScreen.style.opacity = "0";
//   setTimeout(function() {
//     loadingScreen.style.display = "none";
//   }, 500);
// }

// window.addEventListener("load", function () {
//   const progressBar = document.getElementById("progress-bar");
//   let progress = 0;
//   const interval = setInterval(function () {
//     progress += 10;
//     progressBar.style.width = progress + "%";
//     if (progress >= 100) {
//       clearInterval(interval);
//     }
//   }, 100);
// });

// embedded video
function playVideo() {
  let video = document.getElementById('myVideo');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

/* show go top btn when scroll window to 500px */

const goTopBtn = document.querySelector("[dataScrollUp]");

window.addEventListener("scroll", function () {
  window.scrollY >= 1200 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});