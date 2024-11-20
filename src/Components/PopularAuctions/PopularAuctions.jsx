import React from "react";
import "./PopularAuct.css";
import AuctionCard from "../AuctionCard/AuctionCard";
import auctionsData from "../AuctionCard/AuctionData";
import stat1 from "../../assets/Icons/stat1.png";
import stat2 from "../../assets/Icons/stat2.png";
import stat3 from "../../assets/Icons/stat3.png";
import stat4 from "../../assets/Icons/stat4.png";

const PopularAuctions = () => {
  return (
    <div className="popular-auctions">
      {/* Header Section */}
      <div className="header-section">
        <p className="overline">OVERLINE</p>
        <h1 className="main-heading">Most Popular Live Auctions</h1>
      </div>

      {/* Category Section */}
      <div className="categories">
        <div className="category-box">Architecture</div>
        <div className="category-box active">Photography</div>
        <div className="category-box">Games</div>
        <div className="category-box">Music</div>
      </div>

      {/* Auctions Section */}
      <div className="auctions-section">
        {auctionsData.map((auction) => (
          <AuctionCard
            key={auction.id}
            image={auction.image}
            title={auction.title}
            time={auction.time}
            price={auction.price}
            watchers={auction.watchers}
          />
        ))}
      </div>

      {/* Show More Button */}
      <button className="show-more">Show Me More</button>

      <div className="auction-div"></div>

      {/* Footer Stats */}
      <div className="footer-stats">
        <div className="stat-box">
          <img src={stat1} alt="Icon 1" className="icon" />
          <div className="stat-content">
            <p className="stat-number">300k</p>
            <p className="stat-text">User Active</p>
          </div>
        </div>
        <div className="stat-box">
          <img src={stat2} alt="Icon 1" className="icon" />
          <div className="stat-content">
            <p className="stat-number">52,5k</p>
            <p className="stat-text">Artworks</p>
          </div>
        </div>
        <div className="stat-box">
          <img src={stat3} alt="Icon 1" className="icon" />
          <div className="stat-content">
            <p className="stat-number">17,5k</p>
            <p className="stat-text">Artists</p>
          </div>
        </div>
        <div className="stat-box">
          <img src={stat4} alt="Icon 1" className="icon" />
          <div className="stat-content">
            <p className="stat-number">35,58k</p>
            <p className="stat-text">ETH Spent</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularAuctions;
