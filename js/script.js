// Java 1: dynamic greeting based on the visitor's local time
const hour = new Date().getHours();
let greeting = "Good evening";

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
}

document.getElementById("greeting").textContent =
  greeting + "! Welcome to my chess profile.";

// Java 2: dark mode toggle
const button = document.getElementById("theme-toggle");

button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    button.textContent = "Light mode";
  } else {
    button.textContent = "Dark mode";
  }
});