// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {MovieActionTypes, movieReducer} from "./movieReducer";

const rootReducer = combineReducers({
    movies: movieReducer,

})
// определить автоматически тип всего объекта состояния
export type AppRootState = ReturnType<typeof rootReducer>
// Типизация экшн для всего апп
export type AppActionsType = MovieActionTypes


export type TypeDispatch = ThunkDispatch<AppRootState, any, AppActionsType>;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>


// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store