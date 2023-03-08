import React, { useState } from 'react'
import '../styles/Messages.css'
import SendChat from './SendChat'
import RecieveChat from './RecieveChat'

const Messages = ({dispatchUserMessages, userMessages, userData, users}) => {

  const [messageInput, setMessageInput] = useState('')

  function sendMessage() {
    dispatchUserMessages({type: 'sendMessage', payload: {
      userId: userData.userId,
      message: messageInput
    }})
    setMessageInput('')
  }

  function handleChange(e) {
    setMessageInput(e.target.value)
  }

  return (
    <div className='messages-container'>
      <h1>Messages</h1>
      {userMessages.map((message) => {
        if (message.userId === userData.userId) {
          return <SendChat message={message} users={users} />
        } else {
          return <RecieveChat message={message} users={users} />
        }
      })}
      <div className='messages-container-send'>
      <input type="text" value={messageInput} onChange={(e) => handleChange(e)} />
      <button onClick={sendMessage}>Send</button>
      </div>
      
    </div>
  )
}

export default Messages