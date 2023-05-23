
// embedded video
function playVideo() {
  let video = document.getElementById('myVideo');
  if (video.paused) {
    video.play();
    if(video.play) {
      let playButton = document.getElementById('play-button')
      playButton.style.display = "none"
    }
  } else {
    video.pause();
  }
}

/* show go top btn when scroll window to 500px */

const goTopBtn = document.querySelector("[dataScrollUp]");

window.addEventListener("scroll", function () {
  window.scrollY >= 2000 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});