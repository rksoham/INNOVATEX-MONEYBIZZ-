const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

function handleSignUp() {
  alert("Sign-up successful! Please sign in.");

  // Toggle to the sign-in form
  main.classList.remove("sign-up-mode");
}

function handleLogin() {
  const loginUsername = document.getElementById("sign-in-username").value;
  const loginPassword = document.getElementById("sign-in-password").value;

  // Check fixed username and password
  if (loginUsername === "Kaushal" && loginPassword === "1234") {
    alert("Login successful!");

    // Redirect to events.html
    window.location.href = "events.html";
  } else {
    alert("Invalid username or password. Please use 'user' as username and 'password' as password.");
  }
}

// Check login status on page load of events.html
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("events.html")) {
    const loginPage = "index.html";
    alert("Please log in to access this page.");
    window.location.href = loginPage;
  }
});
