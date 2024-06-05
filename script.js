const sections = document.querySelectorAll("section");

// to set sections next to each other
sections.forEach((sec, index) => {
  sec.style.bottom = `${(index + 1) * -100}vh `;
});

// for scrolling animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

let hiddenEle = document.querySelectorAll(".hidden");
hiddenEle.forEach((el) => observer.observe(el));

// to open our contect info's....
function OpenGit() {
  window.open("https://github.com/krishSharma1810");
}

function OpenLinkedIn() {
  window.open("https://linkedin.com/in/krish-sharma-669048241");
}

let numBlock = document.getElementById("Num-block");
let mailBlock = document.getElementById("mail-Block");

function ShowNum() {
  if (mailBlock.classList.contains("Hide-text")) {
    mailBlock.classList.remove("Hide-text");
  }
  numBlock.classList.toggle("Hide-text");
}

function ShowMail() {
  if (numBlock.classList.contains("Hide-text")) {
    numBlock.classList.remove("Hide-text");
  }
  mailBlock.classList.toggle("Hide-text");
}
