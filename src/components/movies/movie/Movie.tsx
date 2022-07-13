import React from "react";
import style from "./Movie.module.css"
import {MovieType} from "../../../state/movieReducer";
import noImage from "../../../assets/image/no_image.png"


type MoviePropsType = {
    data: MovieType
}

const Movie = ({data}: MoviePropsType) => {
    const {medium_cover_image, title_english } = data
    return (
        <div className={style.movieBlock}>
              <div className={style.hoverEffectBtn}>
            <img src={medium_cover_image !== 'N/A' ? medium_cover_image : noImage} alt={`Movie ${title_english}`}/>
            <div className={style.overlay}></div>
            <div className={style.button}><a href="#">More</a></div>
              </div>
        </div>
    )
}


export default Movie

