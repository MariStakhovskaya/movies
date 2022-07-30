import {Dispatch} from "redux";
import {movieApi} from "../api/movie-api";
import {AppActionsType, AppRootState} from "./store";

export type MovieType = {
    id: number,
    medium_cover_image: string,
    large_cover_image: string,
    like_count: number,
    download_count: number,
    title_english: string,
    genres: Array<string>
    year: number,
    rating: number,
    description_full: string

}

const initialState = {
    movies: []as Array<MovieType>,
    movie:{} as MovieType,
    totalMovieCount: 1,
    status: false,
    params: {
        page: 1,
        limit: 15,
        genre: 'all'
    }

}
type InitialStateType = typeof initialState


export const movieReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {

    switch (action.type) {
        case 'GET_MOVIES':
            return {...state,movies: action.movies}
        case 'GET_MOVIE':
            return {...state, movie: action.movie}
        case 'TOTAL-MOVIE-COUNT':
            return {...state,  totalMovieCount: action.totalMovieCount}
        case 'SET-STATUS':
            return {...state,  status: action.status}
        case 'SET-LIMIT-COUNT':
            return {...state,params:{...state.params,limit: action.limit} }
        case 'SET-CURRENT-PAGE':
            return {...state,params:{...state.params,page: action.page} }
        case 'FILTER-GENRES':
            return {...state,params:{...state.params,genre: action.genre} }
        default:
            return state
    }
}
// actions
export const getMoviesAC = (movies: Array<MovieType>) => ({
    type: 'GET_MOVIES',
    movies
} as const)
export const getMovieAC = (movie: MovieType) => ({
    type: 'GET_MOVIE',
    movie
} as const)

export const totalMovieCountAC = (totalMovieCount: number) => ({
    type: 'TOTAL-MOVIE-COUNT',
    totalMovieCount
} as const)
export const limitCountAC = (limit: number) => ({
    type: 'SET-LIMIT-COUNT',
    limit
} as const)
export const setStatusAC = (status: boolean) => ({
    type: 'SET-STATUS',
    status
} as const)
export const setCurrentPageAC = (page: number) => ({
    type: 'SET-CURRENT-PAGE',
    page
} as const)
export const filterGenresAC = (genre: string) => ({
    type: 'FILTER-GENRES',
    genre
} as const)




// thunk

export const getMoviesTC = () => (dispatch: Dispatch<AppActionsType>,getState: ()=> AppRootState) => {
    dispatch(setStatusAC(true))
    const params = getState().movies.params

    movieApi.getAllMovie(params)
        .then((res)=>{
            dispatch(setStatusAC(false))
            dispatch(getMoviesAC(res.data.data.movies))
            dispatch(setCurrentPageAC(res.data.data.page_number))
            dispatch(totalMovieCountAC(res.data.data.movie_count))
            dispatch(limitCountAC(res.data.data.limit))

        })
        .catch(err => {
            console.log(err);
            })
}

export const getDetailsMovieTC = (id: string) => (dispatch:Dispatch<AppActionsType>) => {
    dispatch(setStatusAC(true))
    movieApi.getDetailsMovie(id)
        .then((res)=>{
            console.log(res.data)
            dispatch(getMovieAC(res.data.data.movie))
        })
    dispatch(setStatusAC(false))
}


//type
export type MovieActionTypes = GetMoviesDataType | TotalMovieCountType | CurrentPageType | filterGenresType | limitCountType | setStatusType | GetMovieDataType

export type GetMoviesDataType = ReturnType<typeof getMoviesAC>
export type GetMovieDataType = ReturnType<typeof getMovieAC>
export type TotalMovieCountType = ReturnType<typeof totalMovieCountAC>
export type CurrentPageType = ReturnType<typeof setCurrentPageAC>
export type filterGenresType = ReturnType<typeof filterGenresAC>
export type limitCountType = ReturnType<typeof limitCountAC>
export type setStatusType = ReturnType<typeof setStatusAC>


