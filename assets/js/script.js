// JS Script for the navbar menu toggle dropdown
function toggleMenubar() {

    let menuIcon = document.getElementById('menu-icon');
    let links = document.getElementById('links');

    if (menuIcon.src.includes('assets/images/burger-icon.png')) {
      menuIcon.src = 'assets/images/asterisk-icon.png';
      links.classList.add('show');
    } else {
      menuIcon.src = 'assets/images/burger-icon.png';
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
  
  // To hide hero logo and add it to the navbar when scrolling down
  window.addEventListener("scroll", function () {
    const homeLogo = document.getElementById("home-logo");
    const navLogo = document.getElementById("logo");

    if (window.scrollY > 60) { 
        homeLogo.classList.add("scrolled");
        navLogo.classList.add("scrolled");
    } else {
        homeLogo.classList.remove("scrolled");
        navLogo.classList.remove("scrolled");
    }
    });