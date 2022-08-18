import React, {useEffect, useState} from "react";
import style from "./Comment.module.css"

type CommentPropsType = {
    idMovie: number,
    addComment: (comment:CommentStateType) => void

   }

type CommentStateType = {
    id: number,
    comment:string
}


const Comment = (props:CommentPropsType) => {

    const [value, setValue] = useState('')


    const addComment = () => {
        let newComment = {id:1 , comment:value}
        /*     let commentArr = [...comment, newComment]
         localStorage.setItem('comments',JSON.stringify(commentArr))
             setComment(commentArr)
         setValue('')*/
        props.addComment(newComment)
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
           {/* {comment.map(c => <div key={c.id}>{c.comment}</div>)}*/}

        </div>
    )
}


export default Comment

