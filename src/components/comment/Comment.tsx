import React, {useEffect, useState} from "react";
import style from "./Comment.module.css"

type CommentPropsType = {
    idMovie: number,
    addComment: (comment:CommentStateType, idMovie: number) => void

   }

type CommentStateType = {
    id: number,
    comment:string
}


const Comment = (props:CommentPropsType) => {

    const [value, setValue] = useState('')


    const addComment = () => {
        let newComment = {id:props.idMovie+1 , comment: value}
        props.addComment(newComment, props.idMovie)
        setValue('')
    }


    return (
        <div className={style.commentContainer}>
            <h4>Комментарии:</h4>

          <textarea value={value} rows={4} cols={50} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
            <div>
            <button onClick={addComment}>Отправить</button>
            <button onClick={()=>setValue('')}>Очистить</button>
            </div>
        </div>
    )
}


export default Comment

