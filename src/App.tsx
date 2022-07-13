import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getMoviesTC} from "./state/movieReducer";
import {TypeDispatch} from "./state/store";
import Movies from "./components/movies/Movies";
import Paginator from "./components/paginator/Paginator";

function App() {

    useEffect(()=> {
        dispatch(getMoviesTC())
    },[])

    const dispatch = useDispatch<TypeDispatch>()

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
