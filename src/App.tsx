import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {filterGenresAC, getMoviesTC, MovieType} from "./state/movieReducer";
import {AppRootState, TypeDispatch} from "./state/store";
import Movies from "./components/movies/Movies";
import Paginator from "./components/paginator/Paginator";

function App() {

    const params = useSelector<AppRootState, any>(state => state.movies.params)
    const dispatch = useDispatch<TypeDispatch>()
    useEffect(() => {
        dispatch(getMoviesTC())
    }, [params])





    return (
        <div className="App">

            <header className="App-header">
                <h1>Movie lists</h1>
                <Paginator/>

            </header>
            <Movies/>

        </div>
    );
}

export default App;
