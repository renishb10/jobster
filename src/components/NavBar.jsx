import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
import { toggleSidebar, logoutUser } from "../store/slices/userSlice";

function NavBar() {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logoutUser("Logging out..."))}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default NavBar;
