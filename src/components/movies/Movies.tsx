import React from "react";
import Movie from "./movie/Movie";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, TypeDispatch} from "../../state/store";
import {filterGenresAC, MovieType, setCurrentPageAC} from "../../state/movieReducer";
import style from "./Movies.module.css"
import Preloader from "../../common/preloader/Preloader";
import Paginator from "../paginator/Paginator";


const Movies = () => {
    const dispatch = useDispatch<TypeDispatch>()
    const movies = useSelector<AppRootState, Array<MovieType>>(state => state.movies.movies)
    const status = useSelector<AppRootState, boolean>(state => state.movies.status)

    const onClickFilter = (filterButton: string) => {
        dispatch(filterGenresAC(filterButton))
        dispatch(setCurrentPageAC(1))
    }

    return (
        <div className={style.movieContainer}>


            <div className={style.filterButton}>
                <span onClick={() => onClickFilter('all')}>All movies</span>
                <span onClick={() => onClickFilter('comedy')}>Comedy</span>
                <span onClick={() => onClickFilter('horror')}>Horror</span>
                <span onClick={() => onClickFilter('sci-fi')}>Sci-Fi</span>
                <span onClick={() => onClickFilter('romance')}>Romance</span>
                <span onClick={() => onClickFilter('action')}>Action</span>
                <span onClick={() => onClickFilter('thriller')}>Thriller</span>
                <span onClick={() => onClickFilter('drama')}>Drama</span>
                <span onClick={() => onClickFilter('mystery')}>Mystery</span>
                <span onClick={() => onClickFilter('crime')}>Crime</span>
                <span onClick={() => onClickFilter('animation')}>Animation</span>
                <span onClick={() => onClickFilter('adventure')}>Adventure</span>
                <span onClick={() => onClickFilter('fantasy')}>Fantasy</span>

            </div>
            {status ? <Preloader/> :
            <div className={style.moviesBlock}>

                {movies.map(movie => (
                    <div key={movie.id}>
                        <Movie data={movie}/>
                    </div>
                ))}
            </div>}
            <Paginator/>
        </div>
    )
}


export default Movies

