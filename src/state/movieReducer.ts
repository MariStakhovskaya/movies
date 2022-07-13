import {Dispatch} from "redux";
import {movieApi} from "../api/movie-api";
import {AppActionsType} from "./store";

export type MovieType = {
    id: number,
    medium_cover_image: string,
    title_english: string,

}

const initialState = {
    movies: []as Array<MovieType>,
    totalMovieCount: 0,
    pageNumber: 1
}
type InitialStateType = typeof initialState


export const movieReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    debugger
    switch (action.type) {
        case 'GET_MOVIE':
            return {...state,movies: action.movies}
        case 'TOTAL-MOVIE-COUNT':
            return {...state, totalMovieCount: action.totalMovieCount}
        case 'CURRENT-PAGE':
            return {...state, pageNumber: action.pageNumber}
        default:
            return state
    }
}
// actions
export const getMovieAC = (movies: Array<MovieType>) => ({
    type: 'GET_MOVIE',
    movies
} as const)

export const totalMovieCountAC = (totalMovieCount: number) => ({
    type: 'TOTAL-MOVIE-COUNT',
    totalMovieCount
} as const)
export const getCurrentPageAC = (pageNumber: number) => ({
    type: 'CURRENT-PAGE',
    pageNumber
} as const)




// thunk

export const getMoviesTC = () => (dispatch: Dispatch<AppActionsType>) => {

    movieApi.getAllMovie()
        .then((res)=>{
            dispatch(getMovieAC(res.data.data.movies))
            dispatch(totalMovieCountAC(res.data.movie_count))
            dispatch(getCurrentPageAC(res.data.movie.page_number))

        })
        .catch(err => {

            })
}


//type
export type MovieActionTypes = GetMovieDataType | TotalMovieCountType | CurrentPageType

export type GetMovieDataType = ReturnType<typeof getMovieAC>
export type TotalMovieCountType = ReturnType<typeof totalMovieCountAC>
export type CurrentPageType = ReturnType<typeof getCurrentPageAC>


