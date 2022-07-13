import React from "react";
import style from './Paginator.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";



const Paginator = () => {

    const totalMovieCount = useSelector<AppRootState, number>(state => state.movies.totalMovieCount)
    const currentPage = useSelector<AppRootState, number>(state => state.movies.pageNumber)

    const pageCount =Math.ceil(totalMovieCount / 10)

    const dispatch = useDispatch()
    const pages = []
    for (let i = 1 ; i <= pageCount; i++ ){
        pages.push(i)
    }


    return (
        <div className={style.paginatorBlock}>

        </div>
    )
}


export default Paginator

