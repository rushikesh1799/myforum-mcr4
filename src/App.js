import Navigation from "./Components/Navigation/Navigation";
import "./styles.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Bookmarks from "./Pages/Bookmarks/Bookmarks";
import Profile from "./Pages/Profile/Profile";
import PostDetails from "./Components/Posts/PostDetails/PostDetails";

export default function App() {
  return (
    <div className="App">
      <h2>MyForum</h2>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/bookmark" element={<Bookmarks />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/post/:postID" element={<PostDetails />}></Route>
      </Routes>
    </div>
  );
}
