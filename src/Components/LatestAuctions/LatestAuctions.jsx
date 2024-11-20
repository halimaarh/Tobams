import React, { useState } from "react";
import "./LatestAuctions.css";
import clockImg from "../../assets/Icons/Vector.png";
import avatar1 from "../../assets/Images/01.png";
import avatar2 from "../../assets/Images/02.png";
import avatar3 from "../../assets/Images/03.png";
import loveIcon from "../../assets/Icons/Vector3.png";
import Img1 from "../../assets/Images/Item1.png";
import Img2 from "../../assets/Images/Item2.png";
import Img3 from "../../assets/Images/Item3.png";
import Img4 from "../../assets/Images/Item4.png";
import Img5 from "../../assets/Images/Item5.png";
import Img6 from "../../assets/Images/Item6.png";
import Img7 from "../../assets/Images/Item7.png";
import Img8 from "../../assets/Images/Item8.png";
import Img9 from "../../assets/Images/Item9.png";

// Auction data for the carousel
const auctionItems = [
  {
    id: 1,
    title: "Vulputate felis purus",
    image: Img1,
    price: "3.19 ETH",
    timeLeft: "15:23min left",
    bids: 150,
    likes: 1230,
  },
  {
    id: 2,
    title: "Dui accumsan leo",
    image: Img2,
    price: "1.11 ETH",
    timeLeft: "08:45min left",
    bids: 87,
    likes: 640,
  },
  {
    id: 3,
    title: "Senectus adipiscing",
    image: Img3,
    price: "2.63 ETH",
    timeLeft: "12:59min left",
    bids: 205,
    likes: 980,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    image: Img4,
    price: "2.00 ETH",
    timeLeft: "10:40min left",
    bids: 134,
    likes: 890,
  },
  {
    id: 5,
    title: "Vulputate felis",
    image: Img5,
    price: "4.10 ETH",
    timeLeft: "09:20min left",
    bids: 78,
    likes: 560,
  },
  {
    id: 6,
    title: "Nascetur accumsan adipiscing",
    image: Img6,
    price: "1.85 ETH",
    timeLeft: "05:50min left",
    bids: 98,
    likes: 730,
  },
  {
    id: 7,
    title: "Nascetur accumsan adipiscing",
    image: Img7,
    price: "4.67 ETH",
    timeLeft: "34:30min left",
    bids: 98,
    likes: 730,
  },
  {
    id: 8,
    title: "Nascetur accumsan adipiscing",
    image: Img8,
    price: "1.59 ETH",
    timeLeft: "05:90min left",
    bids: 8,
    likes: 89,
  },
  {
    id: 9,
    title: "Nascetur accumsan adipiscing",
    image: Img9,
    price: "8.85 ETH",
    timeLeft: "05:51min left",
    bids: 9,
    likes: 1,
  },
];

const LatestAuctions = () => {
  // State to track the current index in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Number of items displayed per page

  // Function to handle moving to the previous set of items
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : auctionItems.length - 1
    );
  };

  // Function to handle moving to the next set of items
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < auctionItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="latest-auctions">
      {/* Header for the section */}
      <h1 className="header">Latest Live Auctions</h1>

      {/* Carousel container */}
      <div className="auction-carousel">
        {/* Left navigation arrow */}
        <button className="nav-arrow left-arrow" onClick={handlePrev}>
          ‹
        </button>

        {/* Display the visible auction items */}
        <div className="auction-container">
          {auctionItems
            .slice(currentIndex, currentIndex + itemsPerPage) // Only show items for the current index
            .map((item, index) => (
              <div key={item.id} className="auction-card">
                {/* Auction item image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="auction-image"
                />

                {/* Auction details (title and price) */}
                <div className="auction-details">
                  <p className="auction-title">{item.title}</p>
                  <div className="price">
                    <p>{item.price}</p>
                  </div>
                </div>

                {/* Remaining time information */}
                <div className="time-info">
                  <img src={clockImg} alt="Clock" className="clock-icon" />
                  <span>{item.timeLeft}</span>
                </div>

                {/* Divider for aesthetics */}
                <hr className="divider" />

                {/* Footer: avatars, bid info, and likes */}
                <div className="auction-footer">
                  <div className="auction-avatars">
                    <img
                      src={avatar1}
                      alt="Avatar 1"
                      className="auction-avatar"
                    />
                    <img
                      src={avatar2}
                      alt="Avatar 2"
                      className="auction-avatar"
                    />
                    <img
                      src={avatar3}
                      alt="Avatar 3"
                      className="auction-avatar"
                    />
                  </div>
                  <p className="bidding-info">{item.bids} people are bidding</p>
                  <div className="love-info">
                    <img src={loveIcon} alt="Love Icon" className="love-icon" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Right navigation arrow */}
        <button className="nav-arrow right-arrow" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default LatestAuctions;
