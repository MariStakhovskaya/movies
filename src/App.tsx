import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getMoviesTC} from "./state/movieReducer";
import {TypeDispatch} from "./state/store";
import Movies from "./components/movies/Movies";

function App() {

    useEffect(()=> {
        dispatch(getMoviesTC())
    },[])

    const dispatch = useDispatch<TypeDispatch>()

  return (
    <div className="App">

      <header className="App-header">
        <h1>Movie lists</h1>
          <div>1 ,2, 3,4 ,5 ,6 </div>

      </header>
    <Movies/>

    </div>
  );
}

export default App;
