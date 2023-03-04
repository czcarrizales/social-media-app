import React, { useState } from 'react'
import '../styles/Profile.css'

interface Props {
    userData: userData;
}

const Profile = ({userData, setUserData}) => {

    const [editingName, setEditingName] = useState(false)
    const [nameEdit, setNameEdit] = useState(userData.name)

    function handleNameEdit(e) {
        setNameEdit(e.target.value)
    }

    function submitNameEdit() {
        setUserData({...userData, name: nameEdit})
        setEditingName(false)
    }

  return (
    <div className='profile-container'>
        <div className='profile-image'>
            <img src={userData.image} alt="image of current user" />
            {editingName ? <div>
                <input value={nameEdit} onChange={(e) => handleNameEdit(e)}></input>
                <button onClick={submitNameEdit}>Submit Name</button>
            </div> : <h1>{userData.name}</h1>}
            <button className='edit-name' onClick={() => setEditingName(true)}>Edit</button>
        </div>
        <div className='profile-details'>
        <div className='profile-likes'>
            <h2>Likes</h2>
            {userData.likes.map((like) => {
                return <div>{like}</div>
            })}
        </div>
        <div className='profile-dislikes'>
            <h2>Dislikes</h2>
            {userData.dislikes.map((dislike) => {
            return <div>{dislike}</div>
        })}</div>
        </div>
        
    </div>
  )
}

export default Profile