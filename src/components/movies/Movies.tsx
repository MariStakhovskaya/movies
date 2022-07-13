import React from "react";
import Movie from "./movie/Movie";
import {useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {MovieType} from "../../state/movieReducer";


const Movies = () => {
    const movies = useSelector<AppRootState, Array<MovieType>>(state => state.movies.movies)

    return (
        <div className="Movie-container">
            {movies.map(movie =>(
                <div key={movie.id}>
                    <Movie data={movie}/>
                </div>
            ))}
        </div>
    )
}


export default Movies

