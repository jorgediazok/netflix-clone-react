import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2019/01/06/Pictures/new-age-of-streaming_58f730d6-1189-11e9-9a6b-91d91ee16f0e.jpg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://blogs.studentlife.utoronto.ca/lifeatuoft/files/2015/02/FullSizeRender.jpg"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Navbar;
