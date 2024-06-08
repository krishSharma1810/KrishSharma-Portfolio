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

const unHideBtn = document.querySelectorAll(".contact-hide-btn");
unHideBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("open")) {
      btn.classList.remove("open");
    } else {
      const ToHide = document.querySelectorAll(".open");
      ToHide.forEach((hideBtn) => {
        hideBtn.classList.remove("open");
      });
      btn.classList.add("open");
    }
  });
});
