import React from 'react'
import '../styles/SendChat.css'

const SendChat = ({message, users}) => {
  return (
    <div className='send-chat-container'>
        <h2>{users.map(user => user.userId === message.userId ? user.name : null)}</h2>
        <p>{message.message}</p>
    </div>
  )
}

export default SendChat