import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Comment.css";
import Like from "./Like";

interface Props {
  index: number;
  comment: any;
  users: {
    userId: number;
    name: string;
  }[];
  dispatchPosts: any;
}

const Comment = ({ index, comment, users }: Props) => {
  const [commentLikes, setCommentLikes] = useState(0);
  const [commentAuthor, setCommentAuthor] = useState("");

  function upvoteComment() {
    setCommentLikes(commentLikes + 1);
  }

  useEffect(() => {
    users.map((user) => {
      if (user.userId == comment.userId) {
        setCommentAuthor(user.name);
      }
    });
  }, []);

  return (
    <div className="single-comment">
        <div className="single-comment-details">
        <h3>{commentAuthor}</h3>
      <p>{comment.comment}</p>
      <Like likes={commentLikes} upvote={upvoteComment} index={undefined} dispatchPosts={undefined} />
        </div>
      
    </div>
  );
};

export default Comment;
