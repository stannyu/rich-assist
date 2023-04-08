import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="group/1">🥇Group One</Link>

        <Link to="/login">Log Out</Link>
      </nav>

      <Outlet />
      <footer> 
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default RootLayout;
