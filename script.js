// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-section form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const sport = document.getElementById('sport').value;
      
      if (email && sport) {
        alert(`Thank you for subscribing, ${sport} enthusiast! Check your email at ${email} for confirmations.`);
        form.reset();
      } else {
        alert('Please fill out all fields!');
      }
    });
  }
});

// Add smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Log page load
console.log('Sports & Coding Hub website loaded successfully!');
