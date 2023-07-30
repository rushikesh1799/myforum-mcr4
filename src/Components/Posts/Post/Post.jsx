import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { ForumContext } from "../../../Context/forumContext";

const Post = ({ post }) => {
  const { forumPostsData, getTimeInMinutes, setForumPostsData } = useContext(
    ForumContext
  );

  const navigate = useNavigate();

  const handleComment = (postID) => {
    navigate(`/post/${postID}`);
  };

  const handleUpvote = (thispost) => {
    const newObj = {
      ...thispost,
      upvotes: thispost.upvotes + 1
    };

    const newArray = forumPostsData.map((post) =>
      post.postId === newObj.postId ? newObj : post
    );
    // console.log(newArray);
    setForumPostsData(newArray);
  };
  const handleDownVote = (thispost) => {
    const newObj = {
      ...thispost,
      downvotes: thispost.downvotes + 1
    };

    const newArray = forumPostsData.map((post) =>
      post.postId === newObj.postId ? newObj : post
    );
    // console.log(newArray);
    setForumPostsData(newArray);
  };

  return (
    <div key={post?.postId}>
      <div className="individual__post__container">
        <div className="votes__container">
          <div onClick={() => handleUpvote(post)}>
            <i
              className="fa fa-caret-up fa-4x up__votes"
              aria-hidden="true"
            ></i>
          </div>

          <p>{post?.upvotes - post?.downvotes}</p>
          <div onClick={() => handleDownVote(post)}>
            <i
              className="fa fa-caret-down fa-4x down__votes"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <div className="post__info__container">
          <div className="post__by__container">
            <img src={post?.picUrl} alt="user-pic" />
            <span>
              Posted by{" "}
              <span className="post__createdBy">@{post?.username}</span>
            </span>
            <span className="dot"> • </span>
            <span>{getTimeInMinutes(post?.createdAt)}</span>
          </div>

          <h3>{post?.post}</h3>
          <div className="tags">
            {post?.tags?.map((tag) => (
              <p key={tag}>{tag} </p>
            ))}
          </div>
          <br />
          <div className="post__desc">{post?.postDescription}</div>
          <hr />
          <div className="post__btns">
            <div onClick={() => handleComment(post?.postId)}>
              <i class="fa fa-comment-o" aria-hidden="true"></i>
            </div>

            <i class="fa fa-share-alt" aria-hidden="true"></i>
            {post?.isBookmarked ? (
              <i class="fa fa-bookmark" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-bookmark-o" aria-hidden="true"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
