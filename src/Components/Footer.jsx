import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-heading">
        <h1>© 2022 Emmanuel Massey</h1>
      </section>
      <section className="footer-icons">
        <section className="icon-wrapper">
          <a href="https://www.linkedin.com/in/masseyemmanuel/" target="_blank">
            <img src="images/linkedInIcon.png" alt="linked in link" />
          </a>
        </section>
        <section className="icon-wrapper">
          <a href="https://github.com/Emassey123" target="_blank">
            <img src="images/githubIcon.png" alt=" github link" />
          </a>
        </section>
        <section className="icon-wrapper">
          <a href="https://www.instagram.com/manny.704/" target="_blank">
            <img src="images/instagramIcon.png" alt=" instagram link" />
          </a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
