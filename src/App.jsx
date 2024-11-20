import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import MainSection from "./Components/MainSection/MainSection";
import PopularAuctions from "./Components/PopularAuctions/PopularAuctions";
import PageWithSlider from "./Components/PageWithSlider/PageWithSlider";
import Footer from "./Components/Footer/Footer";
import LatestAuctions from "./Components/LatestAuctions/LatestAuctions";
import DetailSection from "./Components/DetailSection/DetailSection";

const App = () => {
  return (
    <div>
      <Topbar />
      <MainSection />
      <LatestAuctions />
      <DetailSection />
      <PopularAuctions />
      <PageWithSlider />
      <Footer />
    </div>
  );
};

export default App;
