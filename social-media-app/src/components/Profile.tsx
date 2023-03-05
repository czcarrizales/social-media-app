import React, { useState } from 'react'
import '../styles/Profile.css'

interface Props {
    userData: userData;
}

const Profile = ({userData, setUserData}) => {

    const [editingName, setEditingName] = useState(false)
    const [nameEdit, setNameEdit] = useState(userData.name)
    const [editingLikes, setEditingLikes] = useState(false)

    function handleNameEdit(e) {
        setNameEdit(e.target.value)
    }

    function submitNameEdit() {
        setUserData({...userData, name: nameEdit})
        setEditingName(false)
    }

    console.log(editingLikes)

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
            <button onClick={() => setEditingLikes(!editingLikes)}>edit likes</button>
            {userData.likes.map((like) => {
                return <div className='all-likes'>
                    <p>{like}</p>
                    {editingLikes && <button onClick={deleteLike}>delete</button>}
                </div>
            })}
        </div>
        <div className='profile-dislikes'>
            <h2>Dislikes</h2>
            <button onClick={() => setEditingLikes(!editingLikes)}>edit likes</button>
            {userData.dislikes.map((dislike) => {
            return <div className='all-dislikes'><p>{dislike}</p></div>
        })}</div>
        </div>
        
    </div>
  )
}

export default Profile