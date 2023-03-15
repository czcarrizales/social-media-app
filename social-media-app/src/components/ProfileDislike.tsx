import React, { useState } from 'react'
import '../styles/ProfileDislike.css'

interface Props {
    dislike: any;
    index: any;
    dispatchUserData: any
}



const ProfileDislike = ({dislike, index, dispatchUserData}: Props) => {

    const [updateDislikeInput, setUpdateDislikeInput] = useState('')
    const [editingDislike, setEditingDislike] = useState(false)
    
    function deleteDislike(value: number) {
        dispatchUserData({type: 'deleteDislike', payload: value})
        setEditingDislike(false)
    }
    
    function updateDislike(index: number) {
        dispatchUserData({type: 'updateDislike', payload: {index: index, value: updateDislikeInput}})
        setUpdateDislikeInput('')
    }

  return (
    <div className='dislike-container'>
        <div className='main-dislike-container'>
        <p>{dislike}</p>
        <button className='edit-button' onClick={() => setEditingDislike(!editingDislike)}>edit</button>
        </div>
        
            {editingDislike && <div className='edit-dislike-container'>
                        <input onChange={(e) => setUpdateDislikeInput(e.target.value)} type="text" value={updateDislikeInput} />
                        <button className='update-button' onClick={() => {updateDislike(index), setEditingDislike(false)}}>update</button>
                        <button className='delete-button' onClick={() => deleteDislike(dislike)}>delete</button>
                    </div>}
                    
       
    </div>
  )
}

export default ProfileDislike