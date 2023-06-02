// Global Variable
let mainInputBox = document.getElementById("inputbox");
let sound = new Howl({
  src: ["https://www.dropbox.com/s/7bijij58blzo2nd/buttonclick.wav?dl=1"],
  html5: true
});

// Char Counter
let characterCounter = document.getElementById("charCounterText");
let countCharacters = () => {
  let charCount = mainInputBox.value.length;
  characterCounter.textContent = charCount;
};
mainInputBox.addEventListener("input", countCharacters);

// Word Counter
let wordCounter = document.getElementById("wordCounterText");
let totalWords = () => {
  let wordLength = mainInputBox.value.split(/[^\s]+/).length - 1;
  wordCounter.textContent = wordLength;
};
mainInputBox.addEventListener("input", totalWords);

// Clipboard Functions
let clipBoardButton = document.getElementById("clipboardbutton");
// Initiating Clipboardjs
let clipboard = new ClipboardJS(clipBoardButton);

clipBoardButton.addEventListener("click", (clipboard) => {
	sound.play();
  clipBoardButton.style.transform = "translateY(6px)";
  clipBoardButton.style.boxShadow = "none";
  setTimeout(() => {
  	clipBoardButton.style.transform = "none";
    clipBoardButton.style.boxShadow = "0 6px #603a1e";
  }, 50);
  let alertBadge = document.getElementById("copiedtextbadge");
  alertBadge.style.display = "block";
  setTimeout(() => {
    alertBadge.style.display = "none";
  }, 2000);
});

// Clear text
let clearText = document.getElementById("cleartext");
clearText.addEventListener("click", () => {
	sound.play();
  clearText.style.transform = "translateY(6px)";
  clearText.style.boxShadow = "none";
  setTimeout(() => {
  	clearText.style.transform = "none";
    clearText.style.boxShadow = "0 6px #603a1e";
  }, 50);
  mainInputBox.value = "";
  wordCounter.innerText = "0";
  characterCounter.innerText = "0";
});

// Sentence convert.
let convertButton = document.getElementById("convertbutton");
convertButton.addEventListener("click", () => {
	sound.play();
  convertButton.style.transform = "translateY(6px)";
  convertButton.style.boxShadow = "none";
  setTimeout(() => {
  	convertButton.style.transform = "none";
    convertButton.style.boxShadow = "0 6px #603a1e";
  }, 50);
  let toConverter = mainInputBox.value;
  let sentences = String(toConverter).split(/(?<=[.!?])\s+/);
  let convertedSentense = sentences
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
  mainInputBox.value = convertedSentense;
});
