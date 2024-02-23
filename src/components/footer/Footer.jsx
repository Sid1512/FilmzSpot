import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menu-items">
          <li className="menu-item">Terms Of Use</li>
          <li className="menu-item">Privacy Policy</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">FAQ</li>
        </ul>
        <div className="info-text">
          Explore the latest movies and TV shows, discover hidden gems, and stay
          updated with the ever-evolving world of entertainment. Let us be your
          guide as you embark on your cinematic journey.
        </div>
        <div className="social-icons">
          <span className="icon" aria-label="Facebook">
            <FaFacebookF />
          </span>
          <span className="icon" aria-label="Instagram">
            <FaInstagram />
          </span>
          <span className="icon" aria-label="Twitter">
            <FaTwitter />
          </span>
          <span className="icon" aria-label="LinkedIn">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;