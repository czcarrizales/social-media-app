import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

interface Props {
    users: {
        userId: number;
        name: string;
    }[];
}

const UserDetails = ({users}:Props) => {
    const {id} = useParams()
    const [userDetail, setUserDetail] = useState<any | null>({})

    useEffect(() => {
        const foundUser = users.find((user) => {
            return user.userId === Number(id)
        })
        setUserDetail(foundUser)
    }, [])
  return (
    <div>UserDetails {userDetail.name}, {userDetail.userId}</div>
  )
}

export default UserDetails