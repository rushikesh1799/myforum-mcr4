import React from "react";
import Filter from "../../Components/Filter/Filter";
import Navigation from "../../Components/Navigation/Navigation";
import Posts from "../../Components/Posts/Posts";

import "./Home.css";

const Home = () => {
  return (
    <div className="home__primary__container">
      <Navigation />
      <Posts />
      <Filter />
    </div>
  );
};

export default Home;
