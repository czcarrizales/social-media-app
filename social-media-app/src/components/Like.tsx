import React from 'react'
import '../styles/Like.css'

interface Props {

}

const Like = ({likes, upvote}) => {
  return (
    <div className='like-container'>
        <div onClick={upvote}><i class="fa-solid fa-heart"></i></div>
        <div>{likes}</div>
    </div>
  )
}

export default Like