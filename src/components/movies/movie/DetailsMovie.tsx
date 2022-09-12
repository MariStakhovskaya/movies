import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, TypeDispatch} from "../../../state/store";
import {CommentType, getDetailsMovieTC, MovieType} from "../../../state/movieReducer";
import style from './DetailsMovie.module.css'
import like from '../../../assets/icon/like.png'
import rating from '../../../assets/icon/rate.png'
import download from '../../../assets/icon/download.png'
import Comment from "../../comment/Comment";

export type CommentStateType = {
    [key: string]: Array<CommentType>
}
export const DetailsMovie = () => {

    const {id} = useParams<{ id: string }>()
    const dispatch = useDispatch<TypeDispatch>()
    const navigate = useNavigate()
   /* const [commentArray, setCommentArray] = useState({
        [44349]:
            [{id:1, comment: 'test'}, {id: 2, comment: 'test1'}],
        [44347]:
            [{id:3, comment: 'aaa'}, {id: 4, comment: 'bbb'}]
    } )*/


    const [commentArray, setCommentArray] = useState<CommentStateType>({ [44349]:
            [{id:1, comment: 'test'}, {id: 2, comment: 'test1'}] ,})


    useEffect(() => {
        if (id) {
            dispatch(getDetailsMovieTC(id))
        }
    }, [])


    let  arrayMovieComments

    useEffect(() => {

        arrayMovieComments = localStorage.getItem('comments')
        if (arrayMovieComments){
            let newArr = JSON.parse(arrayMovieComments);
                setCommentArray(newArr)
        }

    },[arrayMovieComments])

    const movie = useSelector<AppRootState, MovieType>(state => state.movies.movie)
    const idMovie = useSelector<AppRootState, number>(state => state.movies.movie.id)
    const goBack = () => navigate(-1)

    const addComment = (comment:CommentType, idMovie: number) => {
        debugger
        if (commentArray[idMovie] === undefined){
            commentArray[idMovie]= []
        }
        let newComm = commentArray[idMovie]
        commentArray[idMovie] = [...newComm, comment]
        setCommentArray({...commentArray})
        let str = localStorage.setItem('comments', JSON.stringify(commentArray))

    }

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
                    <div> <Comment idMovie={idMovie}  addComment = {addComment}/></div>
                    <div>

                        {commentArray[movie.id] ? commentArray[movie.id].map(el => <div>{el.comment}</div>) :''}

                    </div>

                </div>

            </div>

        </div>
    )
}