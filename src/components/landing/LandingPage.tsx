import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./landing.scss";

/**
 * 
 * @returns Drag and Drop Group Reordering: This feature would allow users to easily reorder their todo groups by dragging and dropping them into their desired order. This can help users to organize their todos in a way that makes sense to them and reflects their priorities.

Customizable Filters: Users may have different preferences for how they want to filter their todos. By allowing users to create their own custom filters, they can tailor the app to their specific needs and workflows. For example, a user may want to filter todos by priority or due date, so they can create a filter that only shows high-priority todos that are due soon.

Dark Mode: Many users prefer to use apps in dark mode, especially in low light conditions. Adding a dark mode option can make the app more accessible and user-friendly for those who prefer it. Additionally, dark mode can reduce eye strain and save battery life on devices with OLED displays.
 */

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginToBoard = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="section flex flex-col justify-center items-center gap-5">
        <div className="animated_blured_bg">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className="text-5xl">
          Get organized and stay on top of your tasks!
        </h1>
        <h3 className="text-xl text-slate-200">
          Our Todo app makes it easy to manage your daily to-dos.
        </h3>
        <button onClick={handleLoginToBoard} className="btn btn-primary w-72">
          Sign up for free!
        </button>
      </div>
      <div className="section bg-green-300 flex flex-col justify-center items-center gap-5">
        <div className="section_underlay patterned_dots parallaxed"></div>
        <div className="section_underlay z-10 gradient_transparent"></div>
        <h2 className="text-3xl">Group your todos for easy management</h2>
        <p className="text-lg">
          Keep your tasks organized by category or project
        </p>
        <button className="btn btn-accent btn-xl">
          Create your first Todo Group
        </button>
      </div>
      <div className="section gradient_bg flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl">Filter your tasks for better focus</h2>
        <p className="text-lg">
          Easily view and manage the status of your to-dos
        </p>
        <button className="btn btn-accent btn-xl">
          Start filtering your todos
        </button>
      </div>
      <div className="section bg-orange-300 flex flex-col justify-center items-center gap-5">
        <div className="section_underlay patterned_circles parallaxed"></div>
        <h2 className="text-3xl">Securely access your to-dos from anywhere</h2>
        <p className="text-lg">
          Keep your tasks safe and accessible with our secure login
        </p>
        <button className="btn btn-accent btn-xl">
          Log in to your account
        </button>
      </div>
      <div className="section bg-green-300 flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl">Our mission: Simplify your life</h2>
        <p className="text-lg">
          We're passionate about helping you stay organized and focused
        </p>

        <button className="btn btn-accent btn-xl">
          Learn more about our story
        </button>

        <h5>
          From chaos to calm: Our Todo app is your ultimate productivity
          partner!
        </h5>
      </div>
    </div>
  );
};

export default LandingPage;
