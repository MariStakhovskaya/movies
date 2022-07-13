import React from "react";
import style from './Paginator.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {setCurrentPageAC} from "../../state/movieReducer";



const Paginator = () => {
    const dispatch = useDispatch()

    const totalMovieCount = useSelector<AppRootState, number>(state => state.movies.totalMovieCount)
    const currentPage = useSelector<AppRootState, number>(state => state.movies.pageNumber)
    const perPage = useSelector<AppRootState, number>(state => state.movies.perPage)
    const pageCount =Math.ceil(totalMovieCount / perPage)


    const pages: Array<number> = []
    for (let i = 1 ; i <= pageCount; i++ ){
        pages.push(i)
    }

    const indexOfLastPage = perPage * currentPage
    const indexOfFirstPage = indexOfLastPage - perPage


    return (
        <div className={style.paginatorBlock}>
            {pages.map((page,index)=> <span key={index}
                                            className={currentPage === page ? style.currentPage: style.page}
            onClick={()=>dispatch(setCurrentPageAC(page))}>
                {page}</span>)}
            12
        </div>
    )
}


export default Paginator

