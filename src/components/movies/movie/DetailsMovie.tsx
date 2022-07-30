import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, TypeDispatch} from "../../../state/store";
import {getDetailsMovieTC, MovieType} from "../../../state/movieReducer";


export const DetailsMovie = () => {

    const {id} = useParams<{ id: string  }>()
    const dispatch = useDispatch<TypeDispatch>()


    useEffect( () => {
        if(id){
            dispatch(getDetailsMovieTC(id))
        }
    },[])
    const movie = useSelector<AppRootState, MovieType>(state => state.movies.movie)

    return (
        <div>
            <div><img src={movie.medium_cover_image} alt=''/></div>
           <div> {movie.title_english}</div>

        </div>
    )
}