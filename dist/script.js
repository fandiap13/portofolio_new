// current year
var currTime = new Date();
document.querySelector(".year").innerHTML = currTime.getFullYear();

// onload transition animation
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var replacers = document.querySelectorAll("[data-replace]");
    for (var i = 0; i < replacers.length; i++) {
      // console.log("hit here2");
      let replaceClasses = JSON.parse(
        replacers[i].dataset.replace.replace(/'/g, '"')
      );
      Object.keys(replaceClasses).forEach(function (key) {
        replacers[i].classList.remove(key);
        replacers[i].classList.add(replaceClasses[key]);
      });
    }
  }, 1);
});

// onscroll navbar transition
window.onscroll = function () {
  // console.log("ofsetHeght: " + document.body.offsetHeight);
  // console.log("innerheightt: " + window.innerHeight);
  // console.log("pageYoffsett: " + window.pageYOffset);

  const sectionDetectNav = document.querySelector(".section-detect-nav");
  const sectionDetectNavY = sectionDetectNav.offsetTop;
  const pageYOffSet = window.pageYOffset;
  // console.log({ sectionDetectNavY, pageYOffSet });
  if (pageYOffSet > sectionDetectNavY) {
    document.querySelector("header").classList.add("nav-scroll");
  } else {
    document.querySelector("header").classList.remove("nav-scroll");
  }
};

// onscroll animation
const callback = function (entries) {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeOut");
    } else {
      entry.target.classList.remove("animate-fadeOut");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

// hamburger menu
const hamburgerMenu = document.getElementById("hamburgerMenu");
const nav = document.querySelector("header nav");

hamburgerMenu.addEventListener("click", function (e) {
  nav.classList.toggle("active");
});
