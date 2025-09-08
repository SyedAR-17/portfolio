// Lightbox functionality
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");

  document.querySelectorAll(".project-image").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });

    // Change cursor to pointer
    img.style.cursor = "pointer";
  });

  // Close when clicking on close button
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});

// Preloader fade-out
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 800);
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const latLines = document.querySelectorAll(".lat-line");

  latLines.forEach((line, index) => {
    // Adjust this factor to control scroll speed
    const offset = index * 100 - scrollY * 0.5; 
    line.style.top = offset + "px";
  });
});

// Show/hide button on scroll
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex"; // show button
  } else {
    backToTop.style.display = "none"; // hide button
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
