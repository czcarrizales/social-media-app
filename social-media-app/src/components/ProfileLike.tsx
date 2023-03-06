import React, { useState } from 'react'
import '../styles/Like.css'

interface Props {

}



const ProfileLike = ({like, index, dispatchUserData}) => {

    const [likeInput, setLikeInput] = useState('')
    const [updateLikeInput, setUpdateLikeInput] = useState('')
    const [editingLike, setEditingLike] = useState(false)

    function addLike() {
        dispatchUserData({type: 'addLike', payload: likeInput})
        setLikeInput('')
    }
    
    function deleteLike(value) {
        dispatchUserData({type: 'deleteLike', payload: value})
    }
    
    function updateLike(index) {
        dispatchUserData({type: 'updateLike', payload: {index: index, value: updateLikeInput}})
        console.log(index)
    }

  return (
    <div className='like-container'>
         {like}
        <button onClick={() => setEditingLike(!editingLike)}>edit</button>
            {editingLike && <div>
                        <input onChange={(e) => setUpdateLikeInput(e.target.value)} type="text" value={updateLikeInput} />
                        <button onClick={() => {updateLike(index), setEditingLike(false)}}>update like</button>
                    </div>}
                    {editingLike && <button onClick={() => deleteLike(like)}>delete</button>}
       
    </div>
  )
}

export default ProfileLike