import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useGetNowPlaying from "../customHooks/useGetNowPlaying";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRated from "../customHooks/useTopRated";
import useUpcoming from "../customHooks/useUpcoming";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
