// import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'




const UserProfilePage = ({ user }) => {

    const dis = useDispatch()
    const { username } = useParams
    const allUsers = useSelector(state => state.user.value.allUsers)
    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)
    // const currentUser = allUsers.find(x => x.username === username)


    const nav = useNavigate()

    return (
        <div className='UserProfileWrapper'>
            user profile page
            <div onClick={() => nav('/user/:username/' + user.username)} className='user-card'>
                <div className='imgBox'>
                    <img src={user.photo} alt="" />
                </div>
                <h2>{user.username}</h2>
                <p>Role: {user.role}</p>
                <button className='buttonSmall'>Send message</button>
                <button className='buttonSmall'>Delete user</button>
            </div>
        </div>
    )
}

export default UserProfilePage