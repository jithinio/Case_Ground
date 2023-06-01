// Global Variable
let mainInputBox = document.getElementById("inputbox");

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
  let alertBadge = document.getElementById("copiedtextbadge");
  alertBadge.style.display = "block";
  setTimeout(() => {
    alertBadge.style.display = "none";
  }, 2000);
});

// Clear text
let clearText = document.getElementById("cleartext");
clearText.addEventListener("click", () => {
  mainInputBox.value = "";
  let clearWord = document.getElementById("wordCounterText");
  clearWord.value = "";
  wordCounter.innerText = "0";
  characterCounter.innerText = "0";
});

// Sentence convert.
let convertButton = document.getElementById("convertbutton");
convertButton.addEventListener("click", () => {
  let toConverter = mainInputBox.value;
  let sentences = String(toConverter).split(/(?<=[.!?])\s+/);
  let convertedSentense = sentences
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");
  mainInputBox.value = convertedSentense;
});
