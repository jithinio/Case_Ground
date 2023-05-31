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
