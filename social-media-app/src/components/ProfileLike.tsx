import React, { useState } from 'react'
import '../styles/Like.css'

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
    }
    
    function updateLike(index: number) {
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