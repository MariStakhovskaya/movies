import React, {SyntheticEvent} from "react";
import style from "./Movie.module.css"
import {MovieType} from "../../../state/movieReducer";
import noImage from "../../../assets/image/no_image.png"
import {Link} from "react-router-dom";


type MoviePropsType = {
    data: MovieType
}

const Movie = ({data}: MoviePropsType) => {
    
    const {medium_cover_image, title_english, id } = data

    const onError = (e: SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = noImage;
    }
    return (
        <div className={style.movieBlock}>
              <div className={style.hoverEffectBtn}>
            <img onError={onError} src={medium_cover_image} alt={`Movie ${title_english}`}/>
            <div className={style.overlay}></div>
                  <div className={style.button}>

                      <Link to={`details/${id}`}>More</Link>

                  </div>
              </div>
        </div>
    )
}


export default Movie

