import React from "react";
import "./LatestAuctions.css";
import clockImg from "../../assets/Images/Vector.png";
import avatar1 from "../../assets/Images/01.png";
import avatar2 from "../../assets/Images/02.png";
import avatar3 from "../../assets/Images/03.png";
import loveIcon from "../../assets/Images/Vector3.png";
import Img1 from "../../assets/Images/Item1.png";
import Img2 from "../../assets/Images/Item2.png";
import Img3 from "../../assets/Images/Item3.png";

// Auction Items Data
// Each item represents a live auction with relevant details such as title, image, price, time left, number of bids, and likes.
const auctionItems = [
  {
    id: 1,
    title: "Vulputate felis purus viverra morbi facilisi ",
    image: Img1,
    price: "3.19 ETH",
    timeLeft: "15:23min left",
    bids: 150,
    likes: 1230,
  },
  {
    id: 2,
    title: "Dui accumsan leo vestibulum ornare eu",
    image: Img2,
    price: "1.11 ETH",
    timeLeft: "08:45min left",
    bids: 87,
    likes: 640,
  },
  {
    id: 3,
    title: "Senectus adipiscing nascetur accumsan",
    image: Img3,
    price: "2.63 ETH",
    timeLeft: "12:59min left",
    bids: 205,
    likes: 980,
  },
];

// Latest Auctions Component
// This functional component renders a list of live auction cards with details for each item.
const LatestAuctions = () => {
  return (
    <div className="latest-auctions">
      {/* Section Header */}
      <h1 className="header">Latest Live Auctions</h1>

      {/* Auction Cards Container */}
      <div className="auction-container">
        {auctionItems.map((item) => (
          // Each auction card is dynamically created from the auctionItems array
          <div key={item.id} className="auction-card">
            {/* Auction Image */}
            <img src={item.image} alt={item.title} className="auction-image" />

            {/* Auction Title and Price */}
            <div className="auction-details">
              <p className="auction-title">{item.title}</p>
              <div className="price">
                <p>{item.price}</p>
              </div>
            </div>

            {/* Time Remaining Information */}

            <div className="time-info">
              <img src={clockImg} alt="Clock" className="clock-icon" />
              <span>{item.timeLeft}</span>
            </div>

            {/* Divider to separate the details from the footer */}
            <hr className="divider" />

            {/* Auction Footer */}
            {/* Contains avatar images of participants, number of bids, and likes */}
            <div className="auction-footer">
              {/* Avatar Images */}

              <div className="auction-avatars">
                <img src={avatar1} alt="Avatar 1" className="auction-avatar" />
                <img src={avatar2} alt="Avatar 2" className="auction-avatar" />
                <img src={avatar3} alt="Avatar 3" className="auction-avatar" />
              </div>

              {/* Number of People Bidding */}

              <p className="bidding-info">{item.bids} people are bidding</p>

              {/* Likes Information */}

              <div className="love-info">
                <img src={loveIcon} alt="Love Icon" className="love-icon" />
                <span>{item.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestAuctions;
