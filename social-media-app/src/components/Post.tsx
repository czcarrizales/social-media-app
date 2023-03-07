import React, { useEffect } from "react";
import "../styles/Post.css";
import Dislike from "./Dislike";
import Like from "./Like";
import Comment from './Comment'
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  index: number;
  id: number;
  userId: number;
  content: string;
  likes: number;
  dislikes: number;
  comments: any;
  addComment: any;
  users: any;
  userData: any;
  dispatchPosts: any;
}

const Post = ({
  index,
  id,
  userId,
  content,
  likes,
  dislikes,
  comments,
  users,
  userData,
  dispatchPosts
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

  function updatePost() {
    dispatchPosts({type: 'updatePost', payload: {
      index: index,
      value: editValue
    }})
  }

  function deletePost() {
    dispatchPosts({type: 'deletePost', payload: index})
  }

  function upvotePost() {
    dispatchPosts({type: 'upvotePost', payload: index})
    console.log(likes)
  }

  function dislikePost() {
    dispatchPosts({type: 'dislikePost', payload: index})
  }

  function addComment() {
    dispatchPosts({type: 'addComment', payload: {
      index: index,
      value: {
        userId: userData.userId,
        comment: inputText
      }
    }})
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
          <Like index={index} likes={likes} upvote={upvotePost} dispatchPosts={dispatchPosts} />
          <Dislike dislikes={dislikes} downvote={dislikePost} />
        </div>
      </div>
      {userData.userId === author.userId ? (
        <div>
          {editing ? (
            <div>
              <input type="text" value={editValue} onChange={handleEdit} />
              <button onClick={() => {updatePost(), setEditing(!editing)}}>
                finish edit
              </button>
            </div>
          ) : (
            <button onClick={() => setEditing(!editing)}>edit</button>
          )}

          <button onClick={() => deletePost()}>delete</button>
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
            addComment(), setInputText("");
          }}
        >
          Comment
        </button>
      </div>

      {showComments && (
        <div className="post-comments">
          {comments.map((comment: any, index: number) => {
            return <Comment index={index} dispatchPosts={dispatchPosts} comment={comment} users={users} />;
          })}
        </div>
      )}
        </div>
      
      
    </div>
  );
};

export default Post;
