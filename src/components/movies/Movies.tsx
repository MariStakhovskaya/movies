import React, {useState} from "react";
import Movie from "./movie/Movie";
import {useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {MovieType} from "../../state/movieReducer";


const Movies = () => {
    const movies = useSelector<AppRootState, Array<MovieType>>(state => state.movies.movies)
    const [filterButton, setFilterButton] = useState('All')

    const currentMovies = movies.filter(movieGenre =>movieGenre.genres.map(g => g === filterButton))
    const onClickFilter = (filterButton: string) => {
        setFilterButton(filterButton)
    }

    return (
        <div >
            <div>
                <button onClick={() => onClickFilter('All')}>All movies</button>
                <button onClick={() => onClickFilter('Comedy')}>Comedy</button>
                <button onClick={() => onClickFilter('Romantic')}>Romantic</button>
                <button onClick={() => onClickFilter('History')}>History</button>
                <button onClick={() => onClickFilter('Sport')}>Sport</button>
            </div>
            <div className="Movie-container">
                {currentMovies.map(movie =>(
                    <div key={movie.id}>
                        <Movie data={movie}/>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default Movies

