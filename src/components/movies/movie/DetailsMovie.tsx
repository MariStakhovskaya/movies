import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, TypeDispatch} from "../../../state/store";
import {getDetailsMovieTC, MovieType} from "../../../state/movieReducer";
import style from './DetailsMovie.module.css'


export const DetailsMovie = () => {

    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch<TypeDispatch>()
    const navigate = useNavigate()


    useEffect(() => {
        if (id) {
            dispatch(getDetailsMovieTC(id))
        }
    }, [])
    const movie = useSelector<AppRootState, MovieType>(state => state.movies.movie)
    const goBack = () => navigate(-1)

    return (
        <div className={style.detailsMovieBlock}>
            <div className={style.detailsMovie}>
                <button onClick={goBack}>Back</button>
            </div>

            <div className={style.detailsMovieContainer}>
                <div>
                    <img src={movie.medium_cover_image} alt={`Movie ${movie.title_english}`}/>
                </div>
                <div>
                    <div> {movie.title_english}</div>
                    <div> Year: {movie.year}</div>
                    <div> Rating : {movie.rating}</div>
                    <div> Description: {movie.description_full}</div>
                    <div> Компонента комментарии</div>
                </div>
            </div>


        </div>
    )
}