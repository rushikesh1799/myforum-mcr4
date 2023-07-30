import React from "react";
import Filter from "../../Components/Filter/Filter";
import Navigation from "../../Components/Navigation/Navigation";
import Posts from "../../Components/Posts/Posts";

const Bookmarks = () => {
  return (
    <div className="home__primary__container">
      <Navigation />
      <Posts />
      <Filter />
    </div>
  );
};

export default Bookmarks;
