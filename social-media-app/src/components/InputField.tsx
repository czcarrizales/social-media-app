import React, { useState } from "react";
import Post from "./Post";
import '../styles/InputField.css'

interface Props {
    posts: {
        id: number;
        userId: number;
        content: string;
        likes: number;
        dislikes: number;
        comments: string[];
    }[];
    userData: {
        name: string;
        userId: number;
        image: string;
        likes: string[];
        dislikes: string[];
    };
    dispatchPosts: any;
}

const InputField = ({posts, userData, dispatchPosts}: Props) => {

    const [content, setContent] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)
        console.log(content)
    }

    function addPost() {
        const newPost = {
          id: posts.length + 1,
          userId: userData.userId,
          content: content,
          likes: 0,
          dislikes: 0,
          comments: []
        }
        dispatchPosts({type: 'addPost', payload: newPost})
        setContent('')
      }
   
  return (
    <div className="input-field-container">
      <textarea placeholder="Insert text here..." value={content} onChange={(e) => handleChange(e)}></textarea>
      <button onClick={addPost}>Submit</button>
    </div>
  );
};

export default InputField;
