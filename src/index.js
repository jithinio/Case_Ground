// Char Counter
let charCounter = document.getElementById("inputbox");
let characterCounter = document.getElementById("charCounterText");
let countCharacters = () => {
  let charCount = charCounter.value.length;
  characterCounter.textContent = charCount;
};

// Word Counter
let wordCount = document.getElementById("inputbox");
let wordCounter = document.getElementById("wordCounterText");
let totalWords = () => {
  let wordLength = wordCount.value.split(/[^\s]+/).length - 1;
  wordCounter.textContent = wordLength;
};

// Counters Live Event Handlers
wordCount.addEventListener("input", totalWords);
charCounter.addEventListener("input", countCharacters);

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
  let clearInputBox = document.getElementById("inputbox");
  clearInputBox.value = "";
});
