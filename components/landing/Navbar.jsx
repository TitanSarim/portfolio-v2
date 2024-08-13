'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bord">
      <div className="container o-hidden">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#aboutUs" data-scroll-nav="1">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#services" data-scroll-nav="2">
                <span className="rolling-text">Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#skills" data-scroll-nav="2">
                <span className="rolling-text">Skills</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#projects" data-scroll-nav="2">
                <span className="rolling-text">Projects</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#contact" data-scroll-nav="2">
                <span className="rolling-text">Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="https://www.linkedin.com/in/muhammad-sarim-679576212/"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span>
              {/* Linkedin icon */}
            </span>
            <span className="text fz-14 ml-10">LinkedIn</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
