document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          mobileMenu.classList.remove('active');
      });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Sticky navbar on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
          navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
      } else {
          navbar.style.boxShadow = 'none';
      }
  });
  
  // Animation on scroll
  const animateElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
  
  const animateOnScroll = function() {
      animateElements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.style.animationPlayState = 'running';
          }
      });
  };
  
  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const emailInput = this.querySelector('input[type="email"]');
          const email = emailInput.value;
          
          // Here you would typically send the email to your server
          console.log('Subscribed email:', email);
          
          // Show success message
          alert('Thank you for subscribing to our newsletter!');
          emailInput.value = '';
      });
  }
});