document.getElementById("mobile-menu").addEventListener("click", function () {
  var nav = document.querySelector("nav ul");
  var menuToggle = document.getElementById("mobile-menu");

  nav.style.display = nav.style.display === "block" ? "none" : "block";
  menuToggle.classList.toggle("open");
});

var bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.3;

var isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    bgMusic.pause();
    document.getElementById("play-button").classList.remove("playing");
  } else {
    bgMusic.play();
    document.getElementById("play-button").classList.add("playing");
  }

  isPlaying = !isPlaying;

  var playButton = document.getElementById("play-button");
  if (isPlaying) {
    playButton.style.animation = "rotate 20s linear infinite";
  } else {
    playButton.style.animation = "";
  }
}

bgMusic.addEventListener("ended", function () {
  isPlaying = false;
  document.getElementById("play-button").classList.remove("playing");
});

var bgMusic2 = document.getElementById("music2");
bgMusic2.volume = 0.3;

var isPlaying = false;

function toggleMusic2() {
  if (isPlaying) {
    bgMusic2.pause();
    document.getElementById("play-button2").classList.remove("playing");
  } else {
    bgMusic2.play();
    document.getElementById("play-button2").classList.add("playing");
  }

  isPlaying = !isPlaying;

  var playButton2 = document.getElementById("play-button2");
  if (isPlaying) {
    playButton2.style.animation = "rotate 20s linear infinite";
  } else {
    playButton2.style.animation = "";
  }
}

bgMusic2.addEventListener("ended", function () {
  isPlaying = false;
  document.getElementById("play-button2").classList.remove("playing");
});

var bgMusic3 = document.getElementById("music3");
bgMusic3.volume = 0.3;

var isPlaying = false;

function toggleMusic3() {
  if (isPlaying) {
    bgMusic3.pause();
    document.getElementById("play-button3").classList.remove("playing");
  } else {
    bgMusic3.play();
    document.getElementById("play-button3").classList.add("playing");
  }

  isPlaying = !isPlaying;

  var playButton3 = document.getElementById("play-button3");
  if (isPlaying) {
    playButton3.style.animation = "rotate 20s linear infinite";
  } else {
    playButton3.style.animation = "";
  }
}

bgMusic3.addEventListener("ended", function () {
  isPlaying = false;
  document.getElementById("play-button3").classList.remove("playing");
});

var bgMusic4 = document.getElementById("music4");
bgMusic4.volume = 0.3;

var isPlaying = false;

function toggleMusic4() {
  if (isPlaying) {
    bgMusic4.pause();
    document.getElementById("play-button4").classList.remove("playing");
  } else {
    bgMusic4.play();
    document.getElementById("play-button4").classList.add("playing");
  }

  isPlaying = !isPlaying;

  var playButton4 = document.getElementById("play-button4");
  if (isPlaying) {
    playButton4.style.animation = "rotate 20s linear infinite";
  } else {
    playButton4.style.animation = "";
  }
}

bgMusic4.addEventListener("ended", function () {
  isPlaying = false;
  document.getElementById("play-button4").classList.remove("playing");
});

var bgMusic5 = document.getElementById("music5");
bgMusic5.volume = 0.3;

var isPlaying = false;

function toggleMusic5() {
  if (isPlaying) {
    bgMusic5.pause();
    document.getElementById("play-button5").classList.remove("playing");
  } else {
    bgMusic5.play();
    document.getElementById("play-button5").classList.add("playing");
  }

  isPlaying = !isPlaying;

  var playButton5 = document.getElementById("play-button5");
  if (isPlaying) {
    playButton5.style.animation = "rotate 20s linear infinite";
  } else {
    playButton5.style.animation = "";
  }
}

bgMusic5.addEventListener("ended", function () {
  isPlaying = false;
  document.getElementById("play-button5").classList.remove("playing");
});

var bgMusic6 = document.getElementById("music6");
bgMusic6.volume = 0.3;

var isPlaying = false;

function toggleMusic6() {
  if (isPlaying) {
    bgMusic6.pause();
    document.getElementById("play-button6").classList.remove("playing");
  } else {
    bgMusic6.play();
    document.getElementById("play-button6").classList.add("playing");
  }

  isPlaying = !isPlaying;

  var playButton6 = document.getElementById("play-button6");
  if (isPlaying) {
    playButton6.style.animation = "rotate 20s linear infinite";
  } else {
    playButton6.style.animation = "";
  }
}

bgMusic6.addEventListener("ended", function () {
  isPlaying = false;
  document.getElementById("play-button6").classList.remove("playing");
});

document.querySelectorAll(".movie-item").forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("is-flipped");
  });
});
