import React, { useState, useReducer } from 'react'
import '../styles/Profile.css'
import ProfileLike from './ProfileLike';

interface Props {
    userData: userData;
}

const Profile = ({userData, dispatchUserData}) => {


    const [editingName, setEditingName] = useState(false)
    const [nameEdit, setNameEdit] = useState(userData.name)
    const [editingLikes, setEditingLikes] = useState(false)
    const [likeInput, setLikeInput] = useState('')
    const [addingLike, setAddingLike] = useState(false)
    const [dislikeInput, setDislikeInput] = useState('')

    function handleNameEdit(e) {
        setNameEdit(e.target.value)
    }

    function submitNameEdit() {
        dispatchUserData({type: 'setName', payload: nameEdit})
        setEditingName(false)
    }

    function addLike() {
        dispatchUserData({type: 'addLike', payload: likeInput})
        setLikeInput('')
    }

    function deleteLike(value) {
        dispatchUserData({type: 'deleteLike', payload: value})
    }

    function updateLike(index, value) {
        dispatchUserData({type: 'updateLike', payload: {index, value}})
    }

    function addDislike() {
        dispatchUserData({type: 'addDislike', payload: dislikeInput})
        setDislikeInput('')
    }

    function deleteDislike(value) {
        dispatchUserData({type: 'deleteDislike', payload: value})
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
            {addingLike ? 
            <div>
                
            </div> :
            <button onClick={() => setAddingLike(true)}>+</button>}
            {userData.likes.map((like, index) => {
                return <div className='all-likes'>
                    <ProfileLike like={like} index={index} dispatchUserData={dispatchUserData} />
                </div>
            })}
        </div>
        <div className='profile-dislikes'>
            <h2>Dislikes</h2>
            <button onClick={() => setEditingLikes(!editingLikes)}>edit likes</button>
            {editingLikes && <div>
                <input type="text" value={dislikeInput} onChange={((e) => setDislikeInput(e.target.value))} />
                <button onClick={addDislike}>add dislike</button>
                </div>}
            {userData.dislikes.map((dislike) => {
            return <div className='all-dislikes'>
                <p>{dislike}</p>
                {editingLikes && <button onClick={() => deleteDislike(dislike)}>delete</button>}
                </div>
        })}</div>
        </div>
        
    </div>
  )
}

export default Profile