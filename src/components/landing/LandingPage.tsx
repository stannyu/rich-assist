import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import KUTE from "kute.js";

import "./landing.scss";

/**
 * 
 * @returns Drag and Drop Group Reordering: This feature would allow users to easily reorder their todo groups by dragging and dropping them into their desired order. This can help users to organize their todos in a way that makes sense to them and reflects their priorities.

Customizable Filters: Users may have different preferences for how they want to filter their todos. By allowing users to create their own custom filters, they can tailor the app to their specific needs and workflows. For example, a user may want to filter todos by priority or due date, so they can create a filter that only shows high-priority todos that are due soon.

Dark Mode: Many users prefer to use apps in dark mode, especially in low light conditions. Adding a dark mode option can make the app more accessible and user-friendly for those who prefer it. Additionally, dark mode can reduce eye strain and save battery life on devices with OLED displays.
 */

const LandingPage = () => {
  const navigate = useNavigate();

  const blob1 = useRef(null);
  const blob2 = useRef(null);

  useEffect(() => {
    const animate = KUTE.fromTo(
      blob1.current,
      { path: blob1.current },
      { path: blob2.current },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    animate.start();
  }, []);

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
        {/* <div className="section_underlay patterned_section parallaxed"></div> */}
        <h1 className="text-5xl z-10">
          Get organized and stay on top of your tasks!
        </h1>
        <h3 className="text-xl z-10 text-slate-200">
          Our Todo app makes it easy to manage your daily to-dos.
        </h3>
        <button
          onClick={handleLoginToBoard}
          className="btn btn-primary w-72 z-10"
        >
          Sign up for free!
        </button>
      </div>
      <div className="section bg-green-300 flex flex-col justify-center items-center gap-5">
        <svg
          id="visual"
          className="visual_blob"
          viewBox="0 0 900 450"
          width="900"
          height="450"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(445.78811857409835 220.64710926181056)">
            <path
              ref={blob1}
              d="M124.7 -108.3C161.2 -88.2 190.1 -44.1 183.5 -6.6C176.9 30.9 134.8 61.8 98.3 80.5C61.8 99.3 30.9 105.9 -11.1 117C-53 128 -106.1 143.6 -137.7 124.8C-169.4 106.1 -179.7 53 -174.9 4.8C-170 -43.4 -150.1 -86.7 -118.4 -106.9C-86.7 -127.1 -43.4 -124 0.4 -124.4C44.1 -124.7 88.2 -128.5 124.7 -108.3"
              fill="#BB004B"
            ></path>
          </g>
          <g
            transform="translate(454.4229411548795 223.2026064216161)"
            style={{ visibility: "hidden" }}
          >
            <path
              ref={blob2}
              d="M134.7 -137.2C163.4 -106.1 167.7 -53 154.4 -13.3C141.2 26.5 110.4 53 81.7 88.4C53 123.7 26.5 167.9 -6.4 174.3C-39.4 180.7 -78.7 149.4 -112.2 114.1C-145.7 78.7 -173.4 39.4 -170.2 3.2C-167 -33 -133 -66 -99.5 -97.2C-66 -128.3 -33 -157.7 10 -167.7C53 -177.7 106.1 -168.4 134.7 -137.2"
              fill="#BB004B"
            ></path>
          </g>
        </svg>
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
