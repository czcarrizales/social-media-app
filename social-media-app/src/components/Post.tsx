import React, { useEffect } from 'react'
import '../styles/Post.css'
import Dislike from './Dislike'
import Like from './Like'
import { useState } from 'react'

interface Props {
    id: number;
    content: string;
    likes: number;
    dislikes: number;
}

const Post = ({id, content, likes, dislikes, upvote, downvote, comments, addComment}: Props) => {

    const [showComments, setShowComments] = useState(true)
    const [inputText, setInputText] = useState('')

    function handleChange(e) {
        setInputText(e.target.value)
        console.log(inputText)
    }
    
  return (
    
    <div className='post-container'>
        <div className='post-top'>
        <div className='post-content'>{content}</div>
        <div className='post-likes'>
        <Like likes={likes} upvote={upvote}/>
        <Dislike dislikes={dislikes} downvote={downvote}/>
        </div>
        </div>
        <input value={inputText} type="text" onChange={(e) => handleChange(e)} />
        <button onClick={() => {addComment(id, inputText), setInputText('')}}>Add Comment</button>
        
        {
            showComments &&
<div className='post-comments'>
{comments.map((comment) => {
    return <div className='single-comment'>{comment}</div>
})}
</div>
        }
        
    </div>
  )
}

export default Post