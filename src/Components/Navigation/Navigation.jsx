import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="primary__nav">
      <nav className="nav__container">
        <NavLink to="/" className="link">
          <i className="fa fa-home" aria-hidden="true"></i>
          Home
        </NavLink>
        <NavLink to="/explore" className="link">
          <i className="fa fa-compass" aria-hidden="true"></i>
          Explore
        </NavLink>
        <NavLink to="/bookmark" className="link">
          <i className="fa fa-bookmark" aria-hidden="true"></i>
          Bookmark
        </NavLink>
        <NavLink to="/profile" className="link">
          <i className="fa fa-user" aria-hidden="true"></i>
          Profile
        </NavLink>
      </nav>
      <div className="profile">
        <img src="http://bit.ly/42Zm7tM" alt="user-pic" className="user" />
        <div className="profile-details">
          <p className="name">Tanay Pratap</p>
          <p className="username">@tanaypratap</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
