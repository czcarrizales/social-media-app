import React, { useState } from 'react'

interface Props {
    dislike: any;
    index: any;
    dispatchUserData: any
}



const ProfileDislike = ({dislike, index, dispatchUserData}: Props) => {

    const [dislikeInput, setDislikeInput] = useState('')
    const [updateDislikeInput, setUpdateDislikeInput] = useState('')
    const [editingDislike, setEditingDislike] = useState(false)

    function addDislike() {
        dispatchUserData({type: 'addDislike', payload: dislikeInput})
        setDislikeInput('')
    }
    
    function deleteDislike(value: number) {
        dispatchUserData({type: 'deleteDislike', payload: value})
    }
    
    function updateDislike(index: number) {
        dispatchUserData({type: 'updateDislike', payload: {index: index, value: updateDislikeInput}})
        console.log(index)
    }

  return (
    <div className='dislike-container'>
         {dislike}
        <button onClick={() => setEditingDislike(!editingDislike)}>edit</button>
            {editingDislike && <div>
                        <input onChange={(e) => setUpdateDislikeInput(e.target.value)} type="text" value={updateDislikeInput} />
                        <button onClick={() => {updateDislike(index), setEditingDislike(false)}}>update dislike</button>
                    </div>}
                    {editingDislike && <button onClick={() => deleteDislike(dislike)}>delete</button>}
       
    </div>
  )
}

export default ProfileDislike