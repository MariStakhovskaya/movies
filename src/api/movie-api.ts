import axios from "axios";

const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
})

export const movieApi = {
    getAllMovie(params: MovieParamsType) {
        return instance.get((`list_movies.json`), {params})
    },
    getDetailsMovie(movie_id: string) {
        return instance.get(`https://yts.mx/api/v2/movie_details.json/?movie_id=${movie_id}`)
    }
}

export type MovieParamsType = {
    page: number,
    limit: number,
    genre: string,
}