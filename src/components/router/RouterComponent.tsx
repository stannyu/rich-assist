import React from "react";
import { Routes, Route } from "react-router-dom";

import RootLayout from "../../layouts/RootLayout";
import GroupsList from "../groups/GroupsList";
import TodosList from "../todos/TodosList";

import AuthenticatedRoute from "../login/AuthenticatedRoute";
import LoginComponent from "../login/LoginComponent";

import { NotFoundPageComponent } from "../404/404";

const RouterComponent = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginComponent />} />

        <Route
          path="/"
          element={
            <AuthenticatedRoute isSignedIn={true}>
              <RootLayout />
            </AuthenticatedRoute>
          }
        >
          <Route index element={<GroupsList />} />
          <Route path="group/:groupId" element={<TodosList />} />
          <Route path="about" element={<div>About</div>} />
          <Route path="contact" element={<div>Contacts</div>} />
          <Route path="*" element={<NotFoundPageComponent />} />
        </Route>

        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
