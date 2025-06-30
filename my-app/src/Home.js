import React from "react";
import HeroSection from "./HeroSection";
import FeaturedGrantsSection from "./FeaturedGrantsSection";
import SuccessStorySection from "./SuccessStorySection";
import MentorMarketplace from "./MentorMarketplace";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedGrantsSection />
      <SuccessStorySection />
      <MentorMarketplace />
      <Footer />
    </div>
  );
};

export default Home;
