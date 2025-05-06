// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Selecting a horn
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const hornAudio = document.querySelector("audio");
  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;

    // FIX: Update the image and audio src to selected horn
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = `${selectedHorn} image`;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });
  
  // Volume slider
  const volumeSlider = document.getElementById("volume");
  const volumeLevel = document.querySelector("#volume-controls img");
  volumeSlider.addEventListener("input", () => {
    const volumeVal = parseInt(volumeSlider.value);
    hornAudio.volume = volumeVal / 100;

    // Update the volume level icon according to volume value
    if(volumeVal === 0) {
      volumeLevel.src = "assets/icons/volume-level-0.svg";
      volumeLevel.alt = "Volume level 0";
    }
    else if(volumeVal < 33) {
      volumeLevel.src = "assets/icons/volume-level-1.svg";
      volumeLevel.alt = "Volume level 1";
    }
    else if(volumeVal < 67) {
      volumeLevel.src = "assets/icons/volume-level-2.svg";
      volumeLevel.alt = "Volume level 2";
    }
    else {
      volumeLevel.src = "assets/icons/volume-level-3.svg";
      volumeLevel.alt = "Volume level 3";
    }
  });

  // Play Sound button
  const playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();
  playButton.addEventListener("click", () => {
    hornAudio.play();
    if(hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}