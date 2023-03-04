import { useState } from 'react'
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
      dislikes: 0
    },
    {
      id: 2,
      content: 'how is the water',
      likes: 0,
      dislikes: 0
    }
  ])
  const [userData, setUserData] = useState({
    name: 'Chazz',
    image: 'images/doggy.jpg',
    likes: ['gaming', 'coding', 'reading', 'running'],
    dislikes: ['spiders', 'procrastinating', 'mean people', 'tequila']
  })

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

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={(
        <div className="App">
      
      <InputField posts={posts} setPosts={setPosts}/>
      {posts.map((post) => {
        return <Post content={post.content} likes={post.likes} dislikes={post.dislikes} upvote={() => upvote(post.id)} downvote={() => downvote(post.id)} />
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