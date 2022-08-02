import React, { useEffect, useState } from "react";
import { constants } from "../../constants/Constants";
import { getMovies, getNasaBanner } from "../../services/Home";
import HomeScreen from "./HomeScreen";

// Component that acts as a view model for just functionality of Home screen
export const Home = () => {
  const [banner, setBanner] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getHomePageData();
  }, []);

//   Get date for homepage from all the APIs that are being used on homepage
  const getHomePageData = async () => {
    constants?.loaderRef?.showLoader();
    Promise.all([getNasaBanner(), getMovies()])
      .then((responses) => Promise.all(responses.map((res) => res)))
      .then((res) => {
        res.forEach((res) => res?.results ? setMovies(res?.results) : setBanner(res))
        constants?.loaderRef?.hideLoader();
      })
      .catch((error) => {
        constants?.loaderRef?.hideLoader();
      });
  };

  return <HomeScreen banner={banner} movies={movies} />;
};

export default Home;
