import React, {useEffect, useState} from "react";
import style from "./Comment.module.css"
import {json} from "stream/consumers";





const Comment = () => {

    type CommentType = {
        id: number
        comment: string}
type CommentsType = Array<CommentType>

const [value, setValue] = useState('')
    const [comments, setComments] = useState([{}])



     /* let commentArray =  localStorage.getItem('valueComment')
        if(commentArray)
       return  commentArray = JSON.parse(commentArray)
console.log(commentArray)





    const onclickHandler = () => {
        let newComment = {id:1 , comment:value}
     setComments([...comments, newComment])

    localStorage.setItem('valueComment',JSON.stringify(comments))
setValue('')


    }*/



    return (
        <div className={style.commentContainer}>
            <h4>Комментарии:</h4>

          <textarea value={value} rows={4} cols={50} onChange={(e)=>{setValue(e.currentTarget.value)}}/>
            <div>
            <button >Отправить</button>
            <button onClick={()=>setValue('')}>Очистить</button>
            </div>
{/*<div>{commentArray}</div>*/}
        </div>
    )
}


export default Comment

