import React from "react";
import "./AuctionCard.css";
import love from "../../assets/Images/Vector3.png";
import clock from "../../assets/Images/Vector.png";

// AuctionCard Component
// Displays a single auction card with details such as image, title, time, price, and watchers.
const AuctionCard = ({ image, title, time, price, watchers }) => {
  return (
    <div className="auction-card">
      {/* Auction Image */}
      <img src={image} alt="Auction" className="auction-image" />

      {/* Auction Title */}
      <p className="auction-title">{title}</p>

      {/* Auction Details - Time Left and Price */}
      <div className="auction-details">
        <img src={clock} alt="Time Icon" className="clock-icon" />
        <span className="time">{time}</span>
        <span className="price">{price}</span>
      </div>

      {/* Divider */}
      <hr />

      {/* Watching Information */}
      <div className="watching">
        <p>{watchers} people are watching</p>
        <img src={love} alt="Love Icon" className="love-icon" />
      </div>
    </div>
  );
};

export default AuctionCard;
