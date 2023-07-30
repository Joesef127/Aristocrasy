// button modal effect
let giftModalButton = document.getElementById("gift-modal-button");
let buttonDiv = document.getElementById("button-div");
let close = document.getElementById("close");

giftModalButton.addEventListener("click", () => {
  buttonDiv.style.display = "flex";
  // giftModalButton.style.opacity = "0";
});

close.addEventListener("click", () => {
  buttonDiv.style.display = "none";
  // giftModalButton.style.opacity = "1";
});

// story modal effect
let readMore = document.getElementById("read-more");
let loveStory = document.getElementById("love-story");
let closeStory = document.getElementById("close-story");
let goBack = document.getElementById("go-back");

readMore.addEventListener("click", () => {
  loveStory.style.display = "block";
  readMore.style.opacity = "0";
})

closeStory.addEventListener("click", () => {
  loveStory.style.display = "none";
  readMore.style.opacity = "1";
})

goBack.addEventListener("click", () => {
  loveStory.style.display = "none";
  readMore.style.opacity = "1";
})


// text animation
let i = 0;
let j = 0;
let text = "invites you to celebrate their wedding.";
let title = "A WandEll Fairytale";
let speed1 = 50; /* The speed/duration of the effect in milliseconds */
let speed2 = 80; /* The speed/duration of the effect in milliseconds */
let coupleText = document.getElementById("typewriter-text");
let coupleName = document.getElementById("typewriter-name");

function typeWriterName() {
  if (j < title.length) {
    coupleName.innerHTML += title.charAt(j);
    j++;
    setTimeout(typeWriterName, speed2);
  }
}

function typeWriter() {
  if (i < text.length) {
    coupleText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
  }
}

typeWriterName();
typeWriter();
// end of text animation

/* show go top btn when scroll window to 500px */
const goTopBtn = document.querySelector("[dataScrollUp]");

window.addEventListener("scroll", function () {
  window.scrollY >= 2000
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
// end of scroll to top button

// animate on image1
const element1 = document.querySelectorAll(".image-1");
const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element1.forEach((element) => {
  observer1.observe(element);
});

// animate on 2
const element2 = document.querySelectorAll(".image-2");
const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element2.forEach((element) => {
  observer2.observe(element);
});

// animate on image3
const element3 = document.querySelectorAll(".image-3");
const observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element3.forEach((element) => {
  observer3.observe(element);
});

// animate on image4
const element4 = document.querySelectorAll(".image-4");
const observer4 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element4.forEach((element) => {
  observer4.observe(element);
});

// animate on image5
const element5 = document.querySelectorAll(".image-5");
const observer5 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element5.forEach((element) => {
  observer5.observe(element);
});

// animate on image6
const element6 = document.querySelectorAll(".image-6");
const observer6 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element6.forEach((element) => {
  observer6.observe(element);
});

// animate on image7
const element7 = document.querySelectorAll(".image-7");
const observer7 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element7.forEach((element) => {
  observer7.observe(element);
});

// animate on image8
const element8 = document.querySelectorAll(".image-8");
const observer8 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
});
element8.forEach((element) => {
  observer8.observe(element);
});
