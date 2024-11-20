import React from "react";
import "./Topbar.css";
import mainlogo from "../../assets/Logos/logo.png";

const Topbar = () => {
  return (
    <div className="topbar">
      {/* Logo Section */}
      <img src={mainlogo} alt="Logo" className="logo" />

      {/* Navigation Menu */}
      <ul className="menu">
        <li>Auctions</li>
        <li>Roadmap</li>
        <li>Discover</li>
        <li>Community</li>
      </ul>

      {/* Button Section */}
      <div className="Button">
        {/* Contact Button */}
        <button className="contact-btn">Contact</button>

        {/* My Account Button */}
        <button className="account-btn">My Account</button>
      </div>
    </div>
  );
};

export default Topbar;
