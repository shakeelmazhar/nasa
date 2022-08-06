import { requestType, urls } from "../constants/ApiConstants";
import { constants } from "../constants/Constants";
import { apiRequest } from "./ApiHandler";

// Get Movie by id
export const getMovieById = (movieId) => {
    return apiRequest({
        path: `${urls.movieUrl}${movieId}?api_key=${constants.apiKey}`,
        method: requestType.get,
    });
}