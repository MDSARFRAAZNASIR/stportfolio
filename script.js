const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";
let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

// right-skill

const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += ` <div class="points" style="--i:${i}; --rot:$(rotate)deg"></div>`;
  }
  elem.innerHTML = points;
});

// #########project################
var a = document.querySelector(".project-container");
var fix = document.querySelector(".fixed-image");
a.addEventListener("mouseenter", function () {
  fix.style.display = "block";
});

a.addEventListener("mouseleave", function () {
  fix.style.display = "none";
});

var elems = document.querySelectorAll(".element");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fix.style.backgroundImage = `url(${image})`
  });
});

// ##########3gsap################3
var lt =gsap.timeline();
lt.from(".main-div2 .link", {
  y: -40,
  duration:.5,
  // delay:1,
  opacity:0,
  stagger:0.5
})
lt.from(".upper, .lower",{
  x:-600,
  duration:0.5,
  opacity:0,
  stagger:0.5
})
lt.from(".middle",{
  x:600,
  duration:1,
  opacity:0,
  stagger:0.5

})
