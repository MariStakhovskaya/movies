import React, {useState} from "react";
import Movie from "./movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, TypeDispatch} from "../../state/store";
import {filterGenresAC, getMoviesTC, MovieType} from "../../state/movieReducer";


const Movies = () => {
    const dispatch = useDispatch<TypeDispatch>()
    const movies = useSelector<AppRootState, Array<MovieType>>(state => state.movies.movies)


    const onClickFilter = (filterButton: string) => {
        dispatch(filterGenresAC(filterButton))
    }

    return (
        <div>
            <div>
                <button onClick={() => onClickFilter('all')}>All movies</button>
                <button onClick={() => onClickFilter('comedy')}>Comedy</button>
                <button onClick={() => onClickFilter('horror')}>Horror</button>
                <button onClick={() => onClickFilter('sci-fi')}>Sci-Fi</button>
                <button onClick={() => onClickFilter('romance')}>Romance</button>
                <button onClick={() => onClickFilter('action')}>Action</button>
                <button onClick={() => onClickFilter('thriller')}>Thriller</button>
                <button onClick={() => onClickFilter('drama')}>Drama</button>
                <button onClick={() => onClickFilter('mystery')}>Mystery</button>
                <button onClick={() => onClickFilter('crime')}>Crime</button>
                <button onClick={() => onClickFilter('animation')}>Animation</button>
                <button onClick={() => onClickFilter('adventure')}>Adventure</button>
                <button onClick={() => onClickFilter('fantasy')}>Fantasy</button>

            </div>
            <div className="Movie-container">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <Movie data={movie}/>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default Movies

