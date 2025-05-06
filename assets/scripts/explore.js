// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select")
  const faceImage = document.querySelector("#explore img");

  // Get the speech voice options from browser
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for(let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      
      // Fill in voice options in selection drop down
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if(voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      // Set attributes to make sure the selected voice audio is used
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
      }
    }

    populateVoiceList();
    if(speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    // Make talk button trigger the speech audio to play and update the face on start and end of speech
    const talkButton = document.querySelector("button");
    const textInput = document.getElementById("text-to-speak")
    talkButton.addEventListener("click", () => {
      const text = textInput.value;
      const selectedVoice = voiceSelect.selectedOptions[0];

      if(!text || selectedVoice.value === "select") {
        return;
      }

      const selectedVoiceName = selectedVoice.getAttribute("data-name");
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voices.find(voice => voice.name === selectedVoiceName);

      utterance.onstart = () => {
        faceImage.src = "assets/images/smiling-open.png";
      }

      utterance.onend = () => {
        faceImage.src = "assets/images/smiling.png";
      }

      synth.speak(utterance);
    });
}