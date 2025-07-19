const navbar = document.querySelector('nav'); // Adjust selector if necessary

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // When scrolled 50px or more
    navbar.classList.add('scrolled');
  } else { // When back at the top
    navbar.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
    const socialIcons = document.querySelector('#header .social-icons');
    const headerHeight = document.querySelector('#header').offsetHeight;
    
    if (window.scrollY > headerHeight - 100) {
        socialIcons.classList.add('hidden');
    } else {
        socialIcons.classList.remove('hidden');
    }
});





