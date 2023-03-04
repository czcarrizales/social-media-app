import React from 'react'
import '../styles/Post.css'
import Dislike from './Dislike'
import Like from './Like'
import { useState } from 'react'

const Post = ({content, likes, dislikes, upvote, downvote}) => {
    
  return (
    
    <div className='post-container'>
        <div className='post-content'>{content}</div>
        <div className='post-likes'>
        <Like likes={likes} upvote={upvote}/>
        <Dislike dislikes={dislikes} downvote={downvote}/>
        </div>
        
    </div>
  )
}

export default Post