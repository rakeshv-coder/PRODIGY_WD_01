// Existing code for changing navbar background color on scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#424769";
  } else {
    nav.style.backgroundColor = "#2D3250";
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form Validation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate inputs
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields
    document.getElementById("contact-form").reset();
  });

// Lightbox
document.querySelectorAll('[data-lightbox="gallery"]').forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const imageSrc = item.getAttribute("href");
    const lightboxContainer = document.createElement("div");
    lightboxContainer.classList.add("lightbox");
    const lightboxImage = document.createElement("img");
    lightboxImage.src = imageSrc;
    lightboxContainer.appendChild(lightboxImage);
    document.body.appendChild(lightboxContainer);
    lightboxContainer.addEventListener("click", () => {
      lightboxContainer.remove();
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    
    setTimeout(function () {
      // Show thank you message
      document.getElementById("thank-you").classList.remove("hidden");

      // Scroll to thank you message
      document
        .getElementById("thank-you")
        .scrollIntoView({ behavior: "smooth" });
    }, 1000); 
  });
