import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Comment.css'
import Like from './Like'

interface Props {
    index: number;
    comment: any;
    users: {
        userId: number;
        name: string;
    }[];
}

const Comment = ({index, comment, users}: Props) => {
    const [commentLikes, setCommentLikes] = useState(0)
    const [commentAuthor, setCommentAuthor] = useState('')

    function upvoteComment() {
        setCommentLikes(commentLikes + 1)
    }

    useEffect(() => {
        users.map(user => {
            if (user.userId == comment.userId) {
                setCommentAuthor(user.name)
            }
        })
    }, [])
  return (
    <div className='single-comment'>
        <Link to={`/users/${comment.userId}`}>
            <h3>{commentAuthor}</h3>
        </Link>
        <p>{comment.comment}</p>
        <Like likes={commentLikes} upvote={upvoteComment} />
    </div>
  )
}

export default Comment