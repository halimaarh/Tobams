import Img1 from "../../assets/Images/Img1.png";
import Img2 from "../../assets/Images/Img2.png";
import Img3 from "../../assets/Images/Img3.png";
import Img4 from "../../assets/Images/Img4.png";

// Array of nft data
// Each object represents a data with its details such as image,time, price,description and number of watch counts.
const nftData = [
  {
    id: 1,
    image: Img1,
    time: "12:30",
    price: "2.50 ETH",
    description: "Unique NFT #1",
    watchCount: 101,
  },
  {
    id: 2,
    image: Img2,
    time: "14:00",
    price: "3.00 ETH",
    description: "Rare NFT #2",
    watchCount: 85,
  },
  {
    id: 3,
    image: Img3,
    time: "16:45",
    price: "2.00 ETH",
    description: "Special Edition NFT #3",
    watchCount: 120,
  },
  {
    id: 4,
    image: Img4,
    time: "10:15",
    price: "1.80 ETH",
    description: "Exclusive NFT #4",
    watchCount: 95,
  },
];
export default nftData;
