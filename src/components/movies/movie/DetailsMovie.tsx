import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, TypeDispatch} from "../../../state/store";
import {getDetailsMovieTC, MovieType} from "../../../state/movieReducer";
import style from './DetailsMovie.module.css'
import like from '../../../assets/icon/like.png'
import rating from '../../../assets/icon/rate.png'
import download from '../../../assets/icon/download.png'
import Comment from "../../comment/Comment";


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
                    <div className={style.titleMovie}> {movie.title_english}</div>
                    <div> <span className={style.titleDetails}>Year:</span> {movie.year}</div>
                    <div className={style.rateBlock}>
                        <div> <img src={rating} alt="rating"/>{movie.rating}</div>
                        <div><img src={like} alt="like"/>{movie.like_count}</div>
                        <div> <img src={download} alt="download"/>{movie.download_count}</div>
                    </div>

                    <div className={style.movieDescription}> {movie.description_full}</div>
                    <div> <Comment /></div>
                </div>

            </div>

        </div>
    )
}