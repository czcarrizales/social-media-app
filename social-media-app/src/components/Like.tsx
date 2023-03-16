import React from 'react'
import '../styles/Like.css'

interface Props {
  index: any;
  likes: any;
  upvote: any;
  dispatchPosts: any;
}

const Like = ({likes, upvote}: Props) => {

  return (
    <div className='like-container'>
        <div onClick={upvote}><i className="fa-solid fa-heart"></i></div>
        <div>{likes}</div>
    </div>
  )
}

export default Like