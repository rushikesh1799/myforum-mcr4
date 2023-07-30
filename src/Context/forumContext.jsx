import { createContext, useEffect, useState } from "react";
import forumData from "../db/forumData";

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
  const [forumPostsData, setForumPostsData] = useState(forumData.posts);

  // useEffect(() => {
  //   console.log(forumPostsData);
  // }, [forumPostsData]);

  const getTimeInMinutes = (createdAt) => {
    // const currentTime = new Date();
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt);
    const timeDifference = Math.floor(
      (currentTime - createdAtTime) / (1000 * 60)
    );
    const formattedTime = `${timeDifference}m`;
    return formattedTime;
  };

  // useEffect(() => {
  //   console.log(forumPostsData);
  // }, [forumPostsData]);

  return (
    <ForumContext.Provider
      value={{ count: 3, forumPostsData, getTimeInMinutes, setForumPostsData }}
    >
      {children}
    </ForumContext.Provider>
  );
};
