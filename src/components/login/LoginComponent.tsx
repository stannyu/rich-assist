import React from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/login.scss";

const LoginComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/board");
  };

  return (
    <div>
      <div className="login_form">
        <h3 className="text-2xl text-center font-sans my-9">Log in</h3>
        <form
          className="form_wrapper flex-col items-center w-5/6 mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
          />
          <button className="btn btn-primary w-full">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
