import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // Writing this method, this would be called everytime when the
  // signIn, signUp, signOut happens
  // This is like a event listner

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
