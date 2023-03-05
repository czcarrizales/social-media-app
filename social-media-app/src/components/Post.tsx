import React, { useEffect } from "react";
import "../styles/Post.css";
import Dislike from "./Dislike";
import Like from "./Like";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  content: string;
  likes: number;
  dislikes: number;
}

const Post = ({
  id,
  userId,
  content,
  likes,
  dislikes,
  upvote,
  downvote,
  comments,
  addComment,
  users,
  userData,
  deletePost,
  editPost,
}: Props) => {
  const [showComments, setShowComments] = useState(true);
  const [inputText, setInputText] = useState("");
  const [editValue, setEditValue] = useState(content);
  const [editing, setEditing] = useState(false);
  const [author, setAuthor] = useState({});

  function handleChange(e) {
    setInputText(e.target.value);
    console.log(inputText);
  }

  function handleEdit(e) {
    setEditValue(e.target.value);
  }

  useEffect(() => {
    users.filter((user) => {
      if (user.userId === userId) {
        setAuthor(user);
      }
    });
  });

  return (
    <div className="post-container" id={id}>
        <div className="post-details">
        <div className="post-top">
        <div className="post-content">
          <Link to={`/users/${userId}`}><h2>{author.name}</h2></Link>
          <div>{content}</div>
        </div>
        <div className="post-likes">
          <Like likes={likes} upvote={upvote} />
          <Dislike dislikes={dislikes} downvote={downvote} />
        </div>
      </div>
      {userData.userId === author.userId ? (
        <div>
          {editing ? (
            <div>
              <input type="text" value={editValue} onChange={handleEdit} />
              <button onClick={() => {editPost(id, editValue), setEditing(!editing)}}>
                finish edit
              </button>
            </div>
          ) : (
            <button onClick={() => setEditing(!editing)}>edit</button>
          )}

          <button onClick={() => deletePost(id)}>delete</button>
        </div>
      ) : null}
        </div>
        <div className="comments-container">
        <div className="add-comment-container">
        <input
          value={inputText}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={() => {
            addComment(id, inputText), setInputText("");
          }}
        >
          Comment
        </button>
      </div>

      {showComments && (
        <div className="post-comments">
          {comments.map((comment) => {
            return <div className="single-comment">{comment}</div>;
          })}
        </div>
      )}
        </div>
      
      
    </div>
  );
};

export default Post;
