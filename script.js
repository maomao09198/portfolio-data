// AOS animations
AOS.init({
  duration: 1000,
  once: true
});

// Simple contact form handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent 🚀");
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Animate hamburger icon
  hamburger.classList.toggle('toggle');
});

// Optional: Animate hamburger icon lines
const cssToggle = document.createElement('style');
cssToggle.innerHTML = `
  .hamburger.toggle span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
  .hamburger.toggle span:nth-child(2) { opacity: 0; }
  .hamburger.toggle span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
`;
document.head.appendChild(cssToggle);
