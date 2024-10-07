import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useGetNowPlaying from "../customHooks/useGetNowPlaying";

const Browse = () => {
  useGetNowPlaying();
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
