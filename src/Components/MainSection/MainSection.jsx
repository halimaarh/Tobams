import React from "react";
import "./MainSection.css";
import Frame from "../../assets/Images/Frame.png";
import Frame2 from "../../assets/Images/Frame2.png";
import Ritter from "../../assets/Logos/Ritter.png";
import Nike from "../../assets/Logos/Nike.png";
import Adidas from "../../assets/Logos/Adidas.png";
import Holland from "../../assets/Logos/Holland.png";
import one from "../../assets/Images/Square1.png";
import two from "../../assets/Images/Square2.png";
import three from "../../assets/Images/Square3.png";
import four from "../../assets/Images/Square4.png";
import fifth from "../../assets/Images/Square5.png";
import search from "../../assets/Icons/SearchIcon.png";

const Main = () => {
  return (
    <div className="main-section">
      {/* Heading */}
      <p className="title">NON FUNGIBLE TOKENS</p>

      {/* Section with text and image */}
      <div className="text-with-img">
        <p className="text">A new NFT</p>
        <img src={Frame} alt="NFT" className="nft-image" />
      </div>

      {/* Section with image and text */}
      <div className="img-with-text">
        <img src={Frame2} alt="Experience" className="experience-image" />
        <p className="text">Experience</p>
      </div>

      {/* Discover Text */}
      <p className="discover-text">Discover, collect and sell</p>

      {/* Search Section */}
      <div className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Items, collections, and creators"
            className="search-input"
          />
          <select className="category-dropdown">
            <option value="">Category</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="gaming">Gaming</option>
          </select>
          <button className="search-button">
            <img src={search} alt="Search" className="search-icon" />
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="logos-section">
        <img src={Ritter} alt="Logo1" className="main-logo" />
        <img src={Nike} alt="Logo2" className="main-logo" />
        <img src={Adidas} alt="Logo3" className="main-logo" />
        <img src={Holland} alt="Logo4" className="main-logo" />
        {/* Scattered Images Section */}
        <div className="scattered-images">
          <div
            className="scattered-item"
            style={{ left: "1300px", top: "30px" }}
          >
            <img src={one} alt="Scattered 1" className="scattered-image" />
          </div>
          <div
            className="scattered-item"
            style={{ left: "80px", top: "130px" }}
          >
            <img src={two} alt="Scattered 2" className="scattered-image" />
          </div>
          <div
            className="scattered-item"
            style={{ left: "1400px", top: "330px" }}
          >
            <img src={three} alt="Scattered 3" className="scattered-image" />
          </div>
          <div
            className="scattered-item"
            style={{ top: "440px", left: "300px" }}
          >
            <img src={four} alt="Scattered 4" className="scattered-image" />
          </div>
          <div
            className="scattered-item"
            style={{ top: "530px", right: "200px" }}
          >
            <img src={fifth} alt="Scattered 5" className="scattered-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
