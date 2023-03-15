import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputField from './components/InputField'
import Navbar from './components/Navbar'
import Post from './components/Post'
import Profile from './components/Profile'
import UserDetails from './components/UserDetails'
import Messages from './components/Messages'
import SendChat from './components/SendChat'
import RecieveChat from './components/RecieveChat'

function App() {

  const postsReducer = (state, action) => {
    switch (action.type) {
      case 'addPost':
        return [...state, action.payload]
      case 'updatePost':
        return state.map((post, index) => {
          if (index === action.payload.index) {
            return {...post, content: action.payload.value}
          } else {
            return post
          }
        })
      case 'deletePost':
        return state.filter((post, index) => {
          console.log(index)
          return index !== action.payload
        })
      case 'upvotePost':
        return state.map((post, index) => {
          console.log(post, index)
          if (index === action.payload) {
            return {...post, likes: post.likes + 1}
          } else {
            return post
          }
        })
      case 'dislikePost':
        return state.map((post, index) => {
          if (index === action.payload) {
            return {...post, dislikes: post.dislikes + 1}
          } else {
            return post
          }
        })
      case 'addComment':
        return state.map((post, index) => {
          if (index === action.payload.index) {
            return {...post, comments: [...post.comments, action.payload.value]}
          } else {
            return post
          }
        })
      default:
        return state
    }
  }

  const [posts, dispatchPosts] = useReducer(postsReducer, [
    {
      id: 1,
      userId: 1,
      content: 'I just got the world record in Donkey Kong!',
      likes: 0,
      dislikes: 0,
      comments: [
        {userId: 1, comment: 'yoyo'}, 
        {userId: 2, comment: 'bobobo'}
      ],
    },
    {
      id: 2,
      userId: 2,
      content: 'I just got a new dog.',
      likes: 0,
      dislikes: 0,
      comments: [{userId: 7, comment: 'ahaha'}, {userId: 1, comment: 'LILY SHHHHHHHHUSH'}]
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
        case 'updateDislike':
          return {...state, dislikes: state.dislikes.map((dislike, index) => {
            if (index == action.payload.index) {
              return action.payload.value
            } else {
              return dislike
            }
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

  const userMessagesReducer = (state, action) => {
    switch (action.type) {
      case 'sendMessage':
        return [...state, action.payload]
      default:
        return state
    }
  }

  const [userMessages, dispatchUserMessages] = useReducer(userMessagesReducer, [
    {userId: 3,
    message: 'This job search is so difficult. I get so discouraged easily!'},
    {userId: 7,
    message: "I wouldn't worry about it too much. Just keep practicing and applying. You'll get there eventually!"},
    {userId: 3,
    message: "I just wish I had a better perspective on how to go about things..."},
    {userId: 7,
    message: "Yeah, it's very hard, especially when you're trying to break through as an entry level. I understand, I've been there before."},
    {userId: 3,
    message: "You seem to have a good head on your shoulders about these kinds of things."},
    {userId: 3,
    message: "What advice could you give me?"},
    {userId: 7,
    message: "Well..."}
  ])

  

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
      userId: 3,
      name: 'Bob'
    },
    {
      userId: 7,
      name: userData.name
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
  }, [userData])

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={(
        <div className="App">
      
      <InputField posts={posts} userData={userData} dispatchPosts={dispatchPosts}/>
      {posts.map((post, index) => {
        return <Post index={index} id={post.id} userId={post.userId} content={post.content} likes={post.likes} dislikes={post.dislikes} comments={post.comments} users={users} userData={userData}  dispatchPosts={dispatchPosts} />
      })}
    </div>
      )} />
      <Route path='profile' element={<Profile userData={userData} dispatchUserData={dispatchUserData} />} />
      <Route path='messages' element={<Messages userData={userData} userMessages={userMessages} dispatchUserMessages={dispatchUserMessages} users={users}/>} />
      <Route path='users'>
        <Route path=':id' element={<UserDetails users={users}/>}/>
      </Route>
      
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App