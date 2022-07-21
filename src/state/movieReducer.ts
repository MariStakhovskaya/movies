import {Dispatch} from "redux";
import {movieApi} from "../api/movie-api";
import {AppActionsType, AppRootState} from "./store";

export type MovieType = {
    id: number,
    medium_cover_image: string,
    title_english: string,
    genres: Array<string>,

}

const initialState = {
    movies: []as Array<MovieType>,
    totalMovieCount: 0,
    params: {
        pageNumber: 1,
        limit: 15,
        genre: 'all'
    }

}
type InitialStateType = typeof initialState


export const movieReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
debugger
    switch (action.type) {
        case 'GET_MOVIE':
            return {...state,movies: action.movies}
        case 'TOTAL-MOVIE-COUNT':
            return {...state,  totalMovieCount: action.totalMovieCount}
        case 'SET-CURRENT-PAGE':
            return {...state,params:{...state.params,pageNumber: action.pageNumber} }
        case 'FILTER-GENRES':
            return {...state,params:{...state.params,genre: action.genre} }
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
export const setCurrentPageAC = (pageNumber: number) => ({
    type: 'SET-CURRENT-PAGE',
    pageNumber
} as const)
export const filterGenresAC = (genre: string) => ({
    type: 'FILTER-GENRES',
    genre
} as const)




// thunk

export const getMoviesTC = () => (dispatch: Dispatch<AppActionsType>,getState: ()=> AppRootState) => {
    debugger

    const params = getState().movies.params

    movieApi.getAllMovie(params)
        .then((res)=>{
            dispatch(getMovieAC(res.data.data.movies))
            dispatch(totalMovieCountAC(res.data.movie_count))

            dispatch(setCurrentPageAC(res.data.movie.page_number))

        })
        .catch(err => {

            })
}


//type
export type MovieActionTypes = GetMovieDataType | TotalMovieCountType | CurrentPageType | filterGenresType

export type GetMovieDataType = ReturnType<typeof getMovieAC>
export type TotalMovieCountType = ReturnType<typeof totalMovieCountAC>
export type CurrentPageType = ReturnType<typeof setCurrentPageAC>
export type filterGenresType = ReturnType<typeof filterGenresAC>

export type FilterGenreType = "All" | "Comedy" | "Scy-Fi" | "Horror" | "Romance" | "Action" | "Thriller" | "Drama" | "Mystery" | "Crime" | "Animation" | "Adventure" | "Fantasy "
