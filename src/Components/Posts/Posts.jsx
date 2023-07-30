import React, { useContext } from "react";
import { ForumContext } from "../../Context/forumContext";

import { useNavigate } from "react-router-dom";

import "./Posts.css";
import Post from "./Post/Post";

const Posts = () => {
  const { forumPostsData, getTimeInMinutes } = useContext(ForumContext);

  console.log(forumPostsData);

  const navigate = useNavigate();

  return (
    <div className="posts__container">
      <div>
        {forumPostsData.map((post) => (
          <Post post={post} key={post.postId} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
