// All urls will be used in this enum
export const urls = {
    nasaUrl: 'https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR',
    imdbMoviesUrl: 'https://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&include_adult=false&1',
    imgUrl: 'https://image.tmdb.org/t/p/original',
    movieUrl: "https://api.themoviedb.org/3/movie/",
    imdbUrl: "https://www.imdb.com/title/"
}

// All request types for API calling
export const requestType = {
    post: 'POST',
    get: 'GET',
    put: 'PUT',
    delete: 'DELETE'
}

// API headers for APIs
export const apiHeaders = {
    application_json: 'application/json',
    authorization: 'Authorization',
    timeOut: 3000
}
