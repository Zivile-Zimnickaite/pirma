
// import { useState } from 'react'
import { useSelector } from 'react-redux/es/exports'
import { useParams, useNavigate } from "react-router-dom"


const UserProfilePage = ({ user }) => {


    const { username } = useParams()
    const allUsers = useSelector(state => state.user.value.allUsers)
    const thisUser = allUsers.find(x => x.username === username)


    return (
        <div className='profilePageContainer flex-column'>
            <div className='user-card'>
                <div >
                    <img src={thisUser.photo} alt="" />
                </div>
                <h2>{thisUser.username}</h2>
                <p>Role: {thisUser.role}</p>
                <button className='buttonSmall'>Send message</button>
                <button className='buttonSmall'>Delete user</button>
            </div>
        </div>
    )
}

export default UserProfilePage