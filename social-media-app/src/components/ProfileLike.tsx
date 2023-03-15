import React, { useState } from 'react'
import '../styles/ProfileLike.css'

interface Props {
    like: any;
    index: any;
    dispatchUserData: any;
}



const ProfileLike = ({like, index, dispatchUserData}: Props) => {

    const [likeInput, setLikeInput] = useState('')
    const [updateLikeInput, setUpdateLikeInput] = useState('')
    const [editingLike, setEditingLike] = useState(false)

    function addLike() {
        dispatchUserData({type: 'addLike', payload: likeInput})
        setLikeInput('')
    }
    
    function deleteLike(value: number) {
        dispatchUserData({type: 'deleteLike', payload: value})
        setEditingLike(false)
        setUpdateLikeInput('')

    }
    
    function updateLike(index: number) {
        dispatchUserData({type: 'updateLike', payload: {index: index, value: updateLikeInput}})
        setUpdateLikeInput('')
        console.log(index)
    }

  return (
    <div className='like-container'>
        <div className='main-like-container'>
        <p className='single-like'>{like}</p>
        <button className='edit-button' onClick={() => setEditingLike(!editingLike)}>edit</button>
        </div>
            {editingLike && <div className='edit-like-container'>
                        <input onChange={(e) => setUpdateLikeInput(e.target.value)} type="text" value={updateLikeInput} />
                        <button className='update-button' onClick={() => {updateLike(index), setEditingLike(false)}}>update</button>
                        <button className='delete-button' onClick={() => deleteLike(like)}>delete</button>
                    </div>}
                    
       
    </div>
  )
}

export default ProfileLike