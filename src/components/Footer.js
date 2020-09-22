import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <h4 className="footer-title">Code Draft - Live Site Maker</h4>
        <a
          href="https://github.com/Swapnil-Sagar/codepen-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub />
        </a>
        <p className="footer-by">
          Made with{" "}
          <span role="img" aria-label="blue-heart">
            💙
          </span>{" "}
          by Swapnil Sagar
        </p>
      </div>
    </div>
  );
}

export default Footer;
