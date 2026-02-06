function abrir(link) {
  document.getElementById("frame").src = link;
}

const video = document.getElementById("videoTopo");

video.addEventListener("click", () => {
  video.requestFullscreen();
});
