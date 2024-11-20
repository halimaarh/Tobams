import React from "react";
import "./AuctionCard.css";
import love from "../../assets/Icons/Vector3.png";
import clock from "../../assets/Icons/Vector.png";

// AuctionCard Component
// Displays a single auction card with details such as image, title, time, price, and watchers.
const AuctionCard = ({ image, title, time, price, watchers }) => {
  return (
    <div className="auction-card-container">
      {/* Auction Image */}
      <img src={image} alt="Auction" className="auction-card-image" />

      {/* Auction Title */}
      <p className="auction-card-title">{title}</p>

      {/* Auction Details - Time Left and Price */}
      <div className="auction-card-details">
        <img src={clock} alt="Time Icon" className="auction-card-clock-icon" />
        <span className="auction-card-time">{time}</span>
        <span className="auction-card-price">{price}</span>
      </div>

      {/* Divider */}
      <hr className="auction-card-divider" />

      {/* Watching Information */}
      <div className="auction-card-watching">
        <p className="auction-card-watchers">{watchers} people are watching</p>
        <img src={love} alt="Love Icon" className="auction-card-love-icon" />
      </div>
    </div>
  );
};

export default AuctionCard;
