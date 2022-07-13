import axios from "axios";



const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
})

export const movieApi = {
    getAllMovie() {
        return  instance.get(`list_movies.json?limit=18`)
    },
}