import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputField from './components/InputField'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Profile from './components/Profile'
import Settings from './components/Settings'

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      content: 'helloooooo',
      likes: 0,
      dislikes: 0,
      comments: ['Good!', 'Eh whatever.']
    },
    {
      id: 2,
      content: 'how is the water',
      likes: 0,
      dislikes: 0,
      comments: []
    }
  ])
  const [userData, setUserData] = useState({
    name: 'Chazz',
    image: 'images/doggy.jpg',
    likes: ['gaming', 'coding', 'reading', 'running'],
    dislikes: ['spiders', 'procrastinating', 'mean people', 'tequila']
  })
  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    console.log('posts were changed')
    setCommentText('')
    console.log(commentText)
  }, [posts])

  useEffect(() => {
    console.log('comment was changed')
  }, [commentText])

  function upvote(id: number) {
    const currentPostIndex = posts.findIndex((post) => post.id === id)
    console.log(currentPostIndex)
    const updatedPostLikes = {...posts[currentPostIndex], likes: posts[currentPostIndex].likes + 1}
    console.log(updatedPostLikes)
    const newPosts = [...posts]
    newPosts[currentPostIndex] = updatedPostLikes
    setPosts(newPosts)
  }

  function downvote(id: number) {
    const currentPostIndex = posts.findIndex((post) => post.id === id)
    console.log(currentPostIndex)
    const updatedPostDislikes = {...posts[currentPostIndex], dislikes: posts[currentPostIndex].dislikes + 1}
    console.log(updatedPostDislikes)
    const newPosts = [...posts]
    newPosts[currentPostIndex] = updatedPostDislikes
    setPosts(newPosts)
  }

  function addComment(id: number, value?: string) {
    // NOTE: You can pass the function to the child, just make sure
    // to pass the value from child into the function. What I mean is
    // just pass the function, you don't need to preload the arguments
    // or paramaters from the parent
    
    // Getting the index of the current post by it's id
    const currentPostIndex = posts.findIndex((post) => post.id === id)
    // Creating a copy of the posts
    const newArray = [...posts]
    // Creating a copy of the copied posts comments
    const newComments = [...newArray[currentPostIndex].comments]
    // Pushing a string into the comments copy
    newComments.push(value)
    // Getting a copy of the posts at the current index, and then
    // replacing the old comments with the updated comments
    const updatedComments = {...newArray[currentPostIndex], comments: newComments}
    // Making sure the copied array gets the updated comments
    newArray[currentPostIndex] = updatedComments
    // Setting the posts to the new array of posts with updated comments
    setPosts(newArray)
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={(
        <div className="App">
      
      <InputField posts={posts} setPosts={setPosts}/>
      {posts.map((post) => {
        return <Post id={post.id} content={post.content} likes={post.likes} dislikes={post.dislikes} comments={post.comments} upvote={() => upvote(post.id)} downvote={() => downvote(post.id)} addComment={addComment} setCommentText={setCommentText} commentText={commentText} />
      })}
    </div>
      )} />
      <Route path='profile' element={<Profile userData={userData} setUserData={setUserData} />} />
      <Route path='settings' element={<Settings/>} />
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App