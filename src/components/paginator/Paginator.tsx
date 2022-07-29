import React from "react";
import style from './Paginator.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../state/store";
import {setCurrentPageAC} from "../../state/movieReducer";
import {createPages} from "../../common/pageCreator/pageCreator";



const Paginator = () => {
    const dispatch = useDispatch()

    const totalMovieCount = useSelector<AppRootState, number>(state => state.movies.totalMovieCount)
    const currentPage = useSelector<AppRootState, number>(state => state.movies.params.page)
    const limit = useSelector<AppRootState, number>(state => state.movies.params.limit)

    // Cколько всего страниц будет. totalMovieCount - общее кол-во фильмо/limit - количество фильмов на странице
    const pagesCount = Math.ceil(totalMovieCount / limit)


    const pages: Array<number> = []

    createPages({pages, pagesCount, currentPage})

    const onClickChangePage = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    return (
        <div className={style.paginatorBlock}>


            {pages.map((page, index) => {
                return <span key={index}
                             onClick={() => onClickChangePage(page)}
                             className={currentPage === page ? style.currentPage : style.page}>
                         {page}</span>
            })}

        </div>
    )
}


export default Paginator

