
/* show go top btn when scroll window to 500px */

const goTopBtn = document.querySelector("[dataScrollUp]");

window.addEventListener("scroll", function () {
  window.scrollY >= 2000 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

// animate on image1
const element1 = document.querySelectorAll(".image-1");
const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element1.forEach(element => {
  observer1.observe(element);
});

// animate on 2
const element2 = document.querySelectorAll(".image-2");
const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element2.forEach(element => {
  observer2.observe(element);
});

// animate on image3
const element3 = document.querySelectorAll(".image-3");
const observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element3.forEach(element => {
  observer3.observe(element);
});

// animate on image4
const element4 = document.querySelectorAll(".image-4");
const observer4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element4.forEach(element => {
  observer4.observe(element);
});

// animate on image5
const element5 = document.querySelectorAll(".image-5");
const observer5 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element5.forEach(element => {
  observer5.observe(element);
});

// animate on image6
const element6 = document.querySelectorAll(".image-6");
const observer6 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element6.forEach(element => {
  observer6.observe(element);
});

// animate on image7
const element7 = document.querySelectorAll(".image-7");
const observer7 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element7.forEach(element => {
  observer7.observe(element);
});

// animate on image8
const element8 = document.querySelectorAll(".image-8");
const observer8 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
});
element8.forEach(element => {
  observer8.observe(element);
});
