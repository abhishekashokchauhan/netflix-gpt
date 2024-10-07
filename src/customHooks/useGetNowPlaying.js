import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useGetNowPlaying = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
};

export default useGetNowPlaying;
