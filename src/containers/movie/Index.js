import React, { useEffect, useState } from "react";
import { Linking } from "react-native";
import { urls } from "../../constants/ApiConstants";
import { constants } from "../../constants/Constants";
import { getMovieById } from "../../services/Movie";
import MovieScreen from "./MovieScreen";

const MovieDetails = ({ route }) => {
  let { movieId } = route?.params;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  //// Get movie by id
  const getMovie = () => { 
    constants.loaderRef.showLoader();
    new Promise(() => {
        getMovieById(movieId).then(response => {
            response && setMovie(response)
            constants.loaderRef.hideLoader();
        })
    }).catch(error => {
        constants.loaderRef.hideLoader();
        console.debug(error);
    })
  }
  
  /// Redirect to IMDB page for selected movie
  const onPressImdbId = (imdbId) => {
    Linking.openURL(`${urls.imdbUrl}${imdbId}`)
  }

  return (
    <MovieScreen movie={movie} onPress={onPressImdbId} />
  );
};

export default MovieDetails;
