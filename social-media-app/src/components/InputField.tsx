import React, { useState } from "react";
import Post from "./Post";
import '../styles/InputField.css'

const InputField = ({posts, setPosts}) => {

    const [content, setContent] = useState('')

    function handleChange(event) {
        setContent(event.target.value)
        console.log(content)
    }

    function addPost() {
        const newPost = {
          id: posts.length + 1,
          content: content,
          likes: 0,
          dislikes: 0,
          comments: []
        }
        setPosts([...posts, newPost])
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
