// Get the video element
const videoPlayer = document.getElementById("videoPlayer");

// Video file paths
const videoSources = [
  "videos/video1.mov",
  "videos/video2.mov",
  "videos/video3.mov",
  "videos/video4.mov"
];

// Store playback time for each video
const videoTimes = {
  "videos/video1.mov": 0,
  "videos/video2.mov": 0,
  "videos/video3.mov": 0,
  "videos/video4.mov": 0
};

let currentIndex = 0;
let firstClickDone = false; // Track if it's the first click

// Load and play a video by index
function loadVideo(index) {
  const src = videoSources[index];
  videoPlayer.src = src;
  videoPlayer.currentTime = videoTimes[src] || 0;

  // Unmute only after the first click
  videoPlayer.muted = !firstClickDone;

  videoPlayer.play();
  currentIndex = index;
}

// Start with the first video muted
loadVideo(0);

// Called on textbox click
function switchVideo() {
  // On first click: unmute and flag it
  if (!firstClickDone) {
    firstClickDone = true;
    videoPlayer.muted = false;
  }

  // Save current video time
  const currentSrc = videoSources[currentIndex];
  videoTimes[currentSrc] = videoPlayer.currentTime;

  // Pick a new random video index (different from current)
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * videoSources.length);
  } while (newIndex === currentIndex);

  loadVideo(newIndex);
}
