import React, { useContext, useEffect, useState } from "react";
import { ForumContext } from "../../Context/forumContext";
import forumData from "../../db/forumData";

import "./Filter.css";

const Filter = () => {
  const { forumPostsData, setForumPostsData } = useContext(ForumContext);
  const [sortBy, setSortBy] = useState("");

  console.log("forumPostsData", forumPostsData);

  useEffect(() => {
    if (sortBy === "trending") {
      const sorted = [...forumPostsData];
      sorted.sort(
        (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
      );
      console.log(sorted);
      setForumPostsData(sorted);
    } else {
      const sorted = [...forumPostsData];
      sorted.sort(
        (a, b) => a.upvotes - a.downvotes - (b.upvotes - b.downvotes)
      );
      setForumPostsData(sorted);
      console.log("sorted", sorted);
    }
  }, [sortBy]);

  return (
    <div className="filter__container">
      <h3>Sort By</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} id="">
        <option value="latest">Latest Posts</option>
        <option value="trending">Trending Posts</option>
      </select>
    </div>
  );
};

export default Filter;
