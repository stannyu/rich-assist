import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./layouts.scss";

const RootLayout = () => {
  return (
    <>
      <div className="viewport_container">
        <header>
          <nav>
            <Link to="/board">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>

            <Link to="/login">Log Out</Link>
          </nav>
        </header>

        <div className="outlet_container">
          <Outlet />
        </div>
      </div>

      <footer className="footer">
        <p>Footer</p>
      </footer>
    </>
  );
};

export default RootLayout;
