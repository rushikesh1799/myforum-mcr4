import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ForumContext } from "../../../Context/forumContext";
import forumData from "../../../db/forumData";
import Post from "../Post/Post";

import Navigation from "../../../Components/Navigation/Navigation";

import "./PostDetails.css";

const PostDetails = () => {
  const { forumPostsData, getTimeInMinutes } = useContext(ForumContext);
  const { postID } = useParams();

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const postToRender = forumPostsData.find((post) => post.postId === postID);

  console.log(postToRender);

  return (
    <div className="home__primary__container1">
      <div className="postdetails__heading">
        <div onClick={() => handleBack()}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <h2 className="postdetails__header">Post</h2>
      </div>

      <div className="postdetails__content">
        <Navigation />
        <div className="postdetails__middle">
          <Post post={postToRender} />
          <div>
            {postToRender.comments.map((comment) => (
              <div className="comments__container">
                <div className="post__info__container1">
                  <img src={postToRender?.picUrl} alt="user-pic" />
                  <div className="post__by__container1">
                    <div>
                      <span className="cmt__user__fullname">
                        {comment.fullname}
                      </span>
                      <span className="cmt__user__username">
                        @{comment.username}
                      </span>
                      <span className="dot"> • </span>
                      <span className="cmt__user__username">
                        {getTimeInMinutes(comment.createdAt)}
                      </span>
                    </div>
                    <div>
                      <span className="cmt__user__username">
                        Replying to{" "}
                        <span className="post__createdBy">
                          @{postToRender.username}
                        </span>
                      </span>
                    </div>
                    <div>{comment.comment}</div>
                    <div className="post__btns1">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                      <i class="fa fa-comment-o" aria-hidden="true"></i>
                      <i class="fa fa-share-alt" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
