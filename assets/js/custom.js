


document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.getElementById("togglePassword");
  const ConfirmtogglePassword = document.getElementById("togglePasswordConfirm");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("passwordConfirm");

  togglePassword.addEventListener("click", function () {

    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });

  ConfirmtogglePassword.addEventListener("click", function () {

    const type = confirmPasswordInput.type === "password" ? "text" : "password";
    confirmPasswordInput.type = type;

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});


// Tabination

function showTab(tabId) {

  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach((content) => {
    content.classList.add('hidden');
  });


  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.remove('hidden');
  }

  const tabButtons = document.querySelectorAll('.tabButton');
  tabButtons.forEach((button) => {
    button.classList.remove('active');
  });

  const clickedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);
  if (clickedButton) {
    clickedButton.classList.add('active');
  }
}

showTab('tab1');

// Mobile Menu Toggle
// document.addEventListener("DOMContentLoaded", function () {
//   const menuBtn = document.getElementById('menu-btn');
//   const mobileMenu = document.getElementById('mobile-menu');

//   if (menuBtn && mobileMenu) {
//     menuBtn.addEventListener('click', () => {
//       mobileMenu.classList.toggle('hidden');
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".menu-link");

  // Toggle Mobile Menu
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("active");

      if (isOpen) {
        mobileMenu.classList.remove("opacity-100", "scale-100", "active");
        mobileMenu.classList.add("opacity-0", "scale-95");

        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 300);
      } else {
        mobileMenu.classList.remove("hidden");
        setTimeout(() => {
          mobileMenu.classList.remove("opacity-0", "scale-95");
          mobileMenu.classList.add("opacity-100", "scale-100", "active");
        }, 10);
      }
    });
  }

  function setActiveMenu(event) {
    menuLinks.forEach(link => {
      link.classList.remove("text-[#F2DB73]", "font-bold", "active");
    });

    event.target.classList.add("text-[#F2DB73]", "font-bold", "active");
  }

  menuLinks.forEach(link => {
    link.addEventListener("click", setActiveMenu);
  });

  function highlightCurrentPage() {
    const currentPath = window.location.pathname.toLowerCase();
    let activeSet = false;

    menuLinks.forEach(link => {
      if (link.getAttribute("href").toLowerCase() === currentPath) {
        link.classList.add("text-[#F9FFCF]", "font-bold", "active");
        activeSet = true;
      }
    });

    if (!activeSet) {
      menuLinks[1].classList.add("text-[#F2DB73]", "font-bold", "active");
    }
  }

  highlightCurrentPage();
});









// Owl Slider
$(document).ready(function(){
  // Initialize Coins Carousel
  $('.coins-carousel').owlCarousel({
      loop: true,
      margin: 16,
      dots: true,
      responsive: {
        0: {
          items: 2,
          margin: 8
        },
        
        768: {
          items: 3,
        },
      
      }
  });

  // Initialize Gems Carousel
  $('.gems-carousel').owlCarousel({
      loop: true,
      margin: 16,
      dots: true,
      responsive: {
        0: {
          items: 2,
          margin: 8
        },
        
        768: {
          items: 3,
        },
      
      }
  });

  // Initialize Wallpapers Carousel
  $('.wallpapers-carousel').owlCarousel({
      loop: true,
      margin: 16,
      dots: true,
      responsive: {
        0: {
          items: 2,
          margin: 8
        },
        
        768: {
          items: 3,
        },
      
      }
  });
});