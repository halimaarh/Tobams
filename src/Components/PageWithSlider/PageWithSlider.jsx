import React, { useEffect, useRef } from "react";
import "./PageWithSlider.css";
import user1 from "../../assets/Images/user1.png";
import user2 from "../../assets/Images/user2.png";
import user3 from "../../assets/Images/user3.png";
import user4 from "../../assets/Images/user4.png";
import slide1 from "../../assets/Images/slide1.png";
import slide2 from "../../assets/Images/slide2.png";
import slide3 from "../../assets/Images/slide3.png";
import slide4 from "../../assets/Images/slide4.png";
import slide5 from "../../assets/Images/slide5.png";
import slide6 from "../../assets/Images/slide6.png";
import slide7 from "../../assets/Images/slide7.png";
import slide8 from "../../assets/Images/slide8.png";
import slide9 from "../../assets/Images/slide9.png";
import slide10 from "../../assets/Images/slide10.png";
import slide11 from "../../assets/Images/slide11.png";
import slide12 from "../../assets/Images/slide12.png";
import slide13 from "../../assets/Images/slide13.png";
import slide14 from "../../assets/Images/slide14.png";
import slide15 from "../../assets/Images/slide15.png";

const PageWithSlider = () => {
  // Using useRef to access the slider DOM element directly
  const sliderRef = useRef(null);

  // useEffect to set up automatic scrolling for the slider
  useEffect(() => {
    const slider = sliderRef.current;

    let scrollSpeed = 2; // Speed of the automatic scroll

    // Function to scroll the slider horizontally
    const scrollSlider = () => {
      if (slider) {
        // Check if the slider has reached the end, and reset it to the beginning
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += scrollSpeed; // Scroll to the right
        }
      }
    };

    // Set an interval to continuously scroll the slider every 20ms
    const interval = setInterval(scrollSlider, 20);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Array of image sources to display in the slider
  const sliderImages = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
    slide14,
    slide15,
  ];

  return (
    <div className="page-with-slider">
      {/* Main Content Section */}
      <div className="content-section">
        <div className="text-content">
          <p className="overline">OVERLINE</p>
          <h1 className="headline">
            Cursus vitae <br /> sollicitudin donec <br />
            nascetur. Join now
          </h1>
          <p className="description">
            Donec volutpat bibendum justo, odio aenean congue est <br />{" "}
            porttitor ut. Mauris vestibulum eros libero amet tincidunt.
          </p>
          <div className="buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
        {/* Avatars Section */}
        <div className="avatars">
          <img src={user1} alt="Avatar 1" className="avatar" />
          <img src={user2} alt="Avatar 2" className="avatar" />
          <img src={user3} alt="Avatar 3" className="avatar" />
          <img src={user4} alt="Avatar 4" className="avatar" />
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider" ref={sliderRef}>
        {/* Displaying images in the slider, using concat to loop through images twice */}
        {sliderImages.concat(sliderImages).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slider ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
};

export default PageWithSlider;
