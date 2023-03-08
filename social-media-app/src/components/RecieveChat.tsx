import React from 'react'
import '../styles/RecieveChat.css'

const RecieveChat = ({message, users}) => {

    users.map(user => console.log(user.userId))
    console.log(message.userId)

  return (
    <div className='recieve-chat-container'>
        <h2>{users.map((user) => {
            return user.userId == message.userId ? user.name : null
        })}</h2>
        <p>{message.message}</p>
    </div>
  )
}

export default RecieveChat