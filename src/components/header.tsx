import { useEffect } from 'preact/hooks';
import './header.scss';

export default function Header() {
  useEffect(() => {
    let menuIcon = document.querySelector('.menuIcon') as HTMLElement;
    let nav = document.querySelector('.overlay-menu') as HTMLElement;

    menuIcon.addEventListener('click', () => {
      if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
      } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
      }
    });


    // Toggle Menu Icon ========================================
    let toggleIcon = document.querySelector('.menuIcon') as HTMLElement;

    toggleIcon.addEventListener('click', () => {
      if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
      } else {
        toggleIcon.className = 'menuIcon';
      }
    });
  });

  return (
    <header>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="#home"><img class='logo' src='logo.png' alt='OSTKD LOGO'></img></a>
          </div>

          <ul id="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>


      <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>


      <div class="overlay-menu">
        <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>    
    </header>
  )
}
