import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/Images/footerIcon.png";
import flogo1 from "../../assets/Images/flogo1.png";
import flogo2 from "../../assets/Images/flogo2.png";
import flogo3 from "../../assets/Images/flogo3.png";
import flogo4 from "../../assets/Images/flogo4.png";
import flogo5 from "../../assets/Images/flogo5.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Div */}
      <div className="footer-section first-div">
        <div className="footer-logo">
          <img src={footerLogo} alt="MainIcon" />
        </div>
        <div className="links">
          <span>Support</span>
          <span>Terms of Service</span>
          <span>License</span>
        </div>
      </div>

      {/* Second Div */}
      <div className="footer-section second-div">
        <div className="navigation">
          <span>Auctions</span>
          <span>Roadmap</span>
          <span>Discover</span>
          <span>Community</span>
        </div>
        <button className="account-button">My Account</button>
        <div className="footer-icons">
          <img src={flogo1} alt="Icon 1" className="footer-icon" />
          <img src={flogo2} alt="Icon 2" className="footer-icon" />
          <img src={flogo3} alt="Icon 3" className="footer-icon" />
          <img src={flogo4} alt="Icon 4" className="footer-icon" />
          <img src={flogo5} alt="Icon 5" className="footer-icon" />
        </div>
      </div>

      {/* Third Div */}
      <div className="footer-section third-div">
        <p className="text">
          Nibh volutpat, aliquam id sagittis elementum. <br />
          Pellentesque laoreet velit, sed egestas in. Id
          <br />
          nam semper dolor tellus vulputate eget turpis.
        </p>
        <div className="newsletter">
          <input type="text" placeholder="Newsletter" />
          <button className="signin-button">Sign In</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
