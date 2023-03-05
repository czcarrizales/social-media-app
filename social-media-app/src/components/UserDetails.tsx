import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const UserDetails = ({users}) => {
    const {id} = useParams()
    const [userDetail, setUserDetail] = useState({})

    useEffect(() => {
        const foundUser = users.find((user) => {
            return user.userId === Number(id)
        })
        setUserDetail(foundUser)
    }, [])
  return (
    <div>UserDetails {userDetail.name}</div>
  )
}

export default UserDetails