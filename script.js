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
