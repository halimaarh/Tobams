import React from "react";
import "./Details.css";
import topImage1 from "../../assets/Images/topImage1.png";
import bottomImage1 from "../../assets/Images/bottomImage1.png";
import topImage2 from "../../assets/Images/topImage2.png";
import bottomImage2 from "../../assets/Images/bottomImage2.png";
import clockIcon from "../../assets/Images/Vector.png";
import loveIcon from "../../assets/Images/Vector2.png";
import itemImage from "../../assets/Images/item.png";
import midImg from "../../assets/Images/midImg.png";
import nftData from "../Details/Data";
import Icon from "../../assets/Images/Icon.png";
import Icon2 from "../../assets/Images/Icon2.png";

const Details = () => {
  return (
    <div className="details">
      {/* First Section: Main content with overline, title, and buttons */}
      <div className="details-top">
        {/* Left Content: Title, paragraph, and buttons */}
        <div className="details-left">
          <p className="overline">OVERLINE</p>
          <h1 className="big-text">
            Sapien ipsum, scelerisque,
            <br /> convallis fusce
          </h1>
          <p className="paragraph">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam, tempor
            pulvinar ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="button-group">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        {/* Right Images: Display images */}
        <div className="details-right">
          <img src={topImage1} alt="Top" className="top-image" />
          <img src={bottomImage1} alt="Bottom" className="bottom-image" />
        </div>
      </div>

      {/* Second Section: Carousel with sale items and NFT grid */}
      <div className="details-middle">
        <div className="carousel">
          {/* Carousel Item: Sale offer with item image, details, and bidding info */}
          <div className="carousel-item">
            <h2 className="sale-header">
              Check out the,
              <br /> hottest sale offers
            </h2>
            <div className="sale-item">
              <img src={itemImage} alt="Item" className="sale-image" />
              <p className="sale-text">
                Fames habitasse risus
                <br /> ultricies tortor sit
              </p>
              <div className="sale-info">
                <img src={clockIcon} alt="Clock" className="clock-icon" />
                <span>22:39</span>
                <div className="price-box">2.20 ETH</div>
              </div>
              <hr className="divider" />
              <div className="last">
                <p className="bidding-info">101 people are bidding</p>
                <img src={loveIcon} alt="Love" className="love-icon" />
              </div>
            </div>
          </div>
          {/* Button to show more sale items */}
          <button className="show-more">
            <p>Show Me More</p>
          </button>
        </div>

        {/* Middle Content: Section about creating and selling NFTs */}
        <div className="middle-content">
          <div className="content">
            <img src={midImg} alt="Middle Image" className="middle-image" />
            <h2 className="middle-header">
              Get started creating <br /> & selling your NFTs
            </h2>
            <p className="middle-paragraph">
              Nunc gravida faucibus netus feugiat <br /> tellus, viverra massa
              feugiat. Mi est sit.
            </p>
            <button className="get-started">
              <p>Get Started </p>
            </button>
          </div>
        </div>

        {/* Top NFT Section: Display top NFTs */}
        <div className="top-nft">
          <h2 className="top-header">
            Top NFT at a Lower,
            <br /> price
          </h2>
          <div className="nft-grid">
            {/* Loop through the nftData array to display each NFT */}
            {nftData.map((nft) => (
              <div key={nft.id} className="nft-item">
                <img
                  src={nft.image}
                  alt={nft.description}
                  className="nft-image"
                />
                <div className="nft-info">
                  <h1>{nft.description}</h1>
                  <div className="nft-details">
                    <img src={clockIcon} alt="Clock" className="clock-icon" />
                    <span>{nft.time}</span>
                    <div className="price-box">{nft.price}</div>
                  </div>
                  <div className="nft-last">
                    <p>{nft.watchCount} people are watching</p>
                    <img src={loveIcon} alt="Love" className="love-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Button to show more NFTs */}
          <button className="nft-show-more">
            <p>Show Me More</p>
          </button>
        </div>
      </div>

      <div className="large-space"></div>

      {/* Third Section: Bottom content with icons and text */}
      <div className="details-bottom">
        <div className="bottom-right">
          <img src={topImage2} alt="Top" className="top-image" />
          <img src={bottomImage2} alt="Bottom" className="bottom-image" />
        </div>
        <div className="bottom-left">
          <p className="overline">OVERLINE</p>
          <h1 className="big-text">
            Habitant tristique <br />
            aliquam in vel <br />
            scelerisque
          </h1>
          <p className="para">
            Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
            pulvinar <br /> ultricies dolor feugiat aliquam commodo.
          </p>
          <div className="icon-columns">
            {/* Icon Columns: Display icons with text */}
            <div className="icon-column">
              <img src={Icon} alt="Icon" className="icon" />
              <p className="icon-text">Sollicitudin sapien</p>
              <p className="icon-paragraph">Cursus fermentum</p>
            </div>
            <div className="icon-column">
              <img src={Icon2} alt="Icon" className="icon" />
              <p className="icon-text">Pulvinar metus</p>
              <p className="icon-paragraph">Nunc sed</p>
            </div>
          </div>
          <div className="button-group">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>

      {/* Divider for visual separation */}
      <div className="detail-divider"></div>
    </div>
  );
};

export default Details;
