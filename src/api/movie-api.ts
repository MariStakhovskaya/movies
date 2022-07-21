import axios from "axios";



const instance = axios.create({
    baseURL: 'https://yts.mx/api/v2/',
})

export const movieApi = {
    getAllMovie(params: any) {
        return  instance.get((`list_movies.json`),{params})
    },
}