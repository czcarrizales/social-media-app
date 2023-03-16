import React from 'react'
import '../styles/SendChat.css'

interface Props {
  message: any;
  users: any;
}

const SendChat = ({message, users}: Props) => {
  return (
    <div className='send-chat-container'>
      <div className='send-chat-content'>
      <h2>{users.map((user: { userId: any; name: any; }) => user.userId === message.userId ? user.name : null)}</h2>
        <p>{message.message}</p>
      </div>
        
    </div>
  )
}

export default SendChat