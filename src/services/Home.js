import { requestType, urls } from "../constants/ApiConstants";
import { apiRequest } from "./ApiHandler";

// Get Nasa banner data 
export const getNasaBanner = () => {
    return apiRequest({
        path: urls.nasaUrl,
        method: requestType.get
    });
}

// Get IMDB Movies Data 
export const getMovies = () => {
    return apiRequest({
        path: urls.imdbMoviesUrl,
        method: requestType.get
    });
}