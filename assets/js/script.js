// JS Script for the navbar menu toggle dropdown
function toggleMenubar() {

  let menuIcon = document.getElementById('menu-icon');
  let links = document.getElementById('links');

  if (menuIcon.src.includes('assets/images/burger-icon.png')) {
    menuIcon.src = 'assets/images/asterisk-icon.png';
    menuIcon.classList.add('rotated');
    links.classList.add('show');
  } else {
    menuIcon.src = 'assets/images/burger-icon.png';
    menuIcon.classList.remove('rotated');
    links.classList.remove('show');
  }

  let linkItems = links.querySelectorAll('a');

  linkItems.forEach(link => {
    link.addEventListener('click', function () {
      links.classList.remove('show'); // Hide the sidebar after a link is clicked
      menuIcon.src = 'assets/images/burger-icon.png'; // Reset the icon to burger
    });
  });
}

//** index.html */ 
// To hide hero logo and add it to the navbar when scrolling down
if (window.location.pathname === "/" || window.location.pathname.endsWith("index.html")) {
  window.addEventListener("scroll", function () {
    const homeLogo = document.getElementById("home-logo");
    const navLogo = document.getElementById("logo");

    if (window.scrollY > 25) {
      homeLogo.classList.add("scrolled");
      navLogo.classList.add("scrolled");
    } else {
      homeLogo.classList.remove("scrolled");
      navLogo.classList.remove("scrolled");
    }
  })

  // To calculate the height between navbar and footer for dynamic fill of hero section
  function adjustHeroHeight() {
    const footerHeight = document.querySelector("footer").offsetHeight;
    const hero = document.getElementById("hero-container");

    hero.style.minHeight = `calc(100vh - ${footerHeight}px)`;
  }

  // Run on page load and window resize
  window.addEventListener("load", adjustHeroHeight);
  window.addEventListener("resize", adjustHeroHeight);
};



