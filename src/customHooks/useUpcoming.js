import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcoming } from "../utils/movieSlice";

const useUpcoming = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcoming();
  }, []);

  const getUpcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    dispatch(addUpcoming(data.results));
  };
};

export default useUpcoming;
