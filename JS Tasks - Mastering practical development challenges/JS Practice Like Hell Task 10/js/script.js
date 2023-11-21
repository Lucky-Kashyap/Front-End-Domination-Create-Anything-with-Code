// Show a progress bar which shows how much page has been scrolled.

// Get elements
const progressBar = document.getElementById("progress-bar");

// Event listener for scrolling
window.addEventListener("scroll", function () {
  // Calculate the scroll progress as a percentage of the total scrollable height
  const scrollProgress =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;

  // Update the width of the progress bar
  progressBar.style.width = `${scrollProgress}%`;
});
