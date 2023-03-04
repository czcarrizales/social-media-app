import React from 'react'
import '../styles/Dislike.css'

interface Props {
    dislikes: number;
    
}

const Dislike = ({dislikes, downvote}: Props) => {
  return (
    <div className='dislike-container'>
        <div onClick={downvote}><i className="fa-solid fa-thumbs-down"></i></div>
        <div>{dislikes}</div>
    </div>
  )
}

export default Dislike