import React from "react";
import Navbar from "./Components/Navbar";
import NavContent from "./Components/NavContent";
import Themes from "./Components/Themes";
import Discover from "./Components/Discover";
import Welcome from "./Components/Welcome";
import Card from "./Components/Card";
import Review from "./Components/Review";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <NavContent />
      <Themes />
      <Discover />
      <Welcome />
      <Card />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
