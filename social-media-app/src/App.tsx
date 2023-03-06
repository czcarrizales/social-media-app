import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputField from './components/InputField'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Profile from './components/Profile'
import Settings from './components/Settings'
import UserDetails from './components/UserDetails'

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      userId: 1,
      content: 'I just got the world record in Donkey Kong!',
      likes: 0,
      dislikes: 0,
      comments: ['Good for you!', 'Fake.', 'I do not believe you.', 'Show proof!']
    },
    {
      id: 2,
      userId: 2,
      content: 'I just got a new dog.',
      likes: 0,
      dislikes: 0,
      comments: ['I love dogs', 'What kind of dog?', 'Fish are better.', 'Just make sure to get their shots on time!', 'Bark.']
    }
  ])

  

  const reducer = (state, action) => {
    switch (action.type) {
        case 'setName' :
          return {...state, name: action.payload}
        case 'addLike' :
          return {...state, likes: [...state.likes, action.payload]}
        case 'deleteLike' :
          return {...state, likes: state.likes.filter((like) => {
            return like !== action.payload
          })}
        case 'updateLike' :
          return {...state, likes: state.likes.map((like, index) => {
            if (index == action.payload.index) {
              console.log(index)
              console.log(action.payload.index)
              console.log(action.payload.value)
              return action.payload.value
            } else {
              return like
            }
          })}
        case 'addDislike':
          return {...state, dislikes: [...state.dislikes, action.payload]}
        case 'deleteDislike':
          return {...state, dislikes: state.dislikes.filter((dislike) => {
            return dislike !== action.payload
          })}
        default:
            return state
    }
}

  const [userData, dispatchUserData] = useReducer(reducer, {
    name: 'User',
    userId: 7,
    image: 'images/doggy.jpg',
    likes: ['gaming', 'coding', 'reading', 'running'],
    dislikes: ['spiders', 'procrastinating', 'big ol bullies', 'tequila']
  })

  

  const [users, setUsers] = useState([
    {
      userId: 1,
      name: 'George'
    },
    {
      userId: 2,
      name: 'Lily'
    },
    {
      userId: 7,
      name: 'User'
    }
  ])

  const [commentText, setCommentText] = useState('')

  useEffect(() => {
    console.log('posts were changed')
    setCommentText('')
    console.log(commentText)
  }, [posts])

  useEffect(() => {
    console.log('comment was changed')
  }, [commentText])

  useEffect(() => {
    console.log('user data changed.')
    console.log(userData)
  }, [userData])

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

  function deletePost(id) {
    setPosts(posts.filter(post => post.id !== id))
  }

  function editPost(id, value) {
    const editedPost = posts.map((post) => {
      console.log(post)
    })
    setPosts(posts.map(post => {
      if (post.id === id) {
        return {...post, content: value}
      } else {
        return post
      }
    }))
  }

  function deleteLike(value) {
    
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={(
        <div className="App">
      
      <InputField posts={posts} setPosts={setPosts} userData={userData}/>
      {posts.map((post) => {
        return <Post id={post.id} userId={post.userId} content={post.content} likes={post.likes} dislikes={post.dislikes} comments={post.comments} upvote={() => upvote(post.id)} downvote={() => downvote(post.id)} addComment={addComment} setCommentText={setCommentText} commentText={commentText} users={users} userData={userData} deletePost={deletePost} editPost={editPost} />
      })}
    </div>
      )} />
      <Route path='profile' element={<Profile userData={userData} dispatchUserData={dispatchUserData} />} />
      <Route path='settings' element={<Settings/>} />
      <Route path='users'>
        <Route path=':id' element={<UserDetails users={users}/>}/>
      </Route>
      
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App