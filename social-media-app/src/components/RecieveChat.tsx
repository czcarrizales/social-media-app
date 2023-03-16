import React from 'react'
import '../styles/RecieveChat.css'

interface Props {
  message: any;
  users: any;
}

const RecieveChat = ({message, users}: Props) => {

  return (
    <div className='recieve-chat-container'>
        <h2>{users.map((user: any) => {
            return user.userId == message.userId ? user.name : null
        })}</h2>
        <p>{message.message}</p>
    </div>
  )
}

export default RecieveChat