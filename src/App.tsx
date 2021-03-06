import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getMoviesTC} from "./state/movieReducer";
import {AppRootState, TypeDispatch} from "./state/store";
import {MovieParamsType} from "./api/movie-api";
import Header from "./components/header/Header";
import {AllRoutes} from "./api/routes/Routes";


function App() {

    const params = useSelector<AppRootState, MovieParamsType>(state => state.movies.params)

    const dispatch = useDispatch<TypeDispatch>()
    useEffect(() => {
        dispatch(getMoviesTC())
    }, [params.page, params.genre, dispatch])

    return (
        <div className="App">
            <header>
                <Header/>

            </header>
            <AllRoutes/>


            <footer className="FooterContainer">

            </footer>
        </div>
    );
}

export default App;
