import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserCard = ({ user }) => {

    const nav = useNavigate()
    // const currentUser = useSelector(state => state.user.value.currentUser)

    return (
        <div className='userCardWrapper'>
            <div onClick={() => nav('/user/:username/' + user.username)} className='user-card'>
                <div className='imgBox'>
                    <img src={user.photo} alt="" />
                </div>
                <h2>{user.username}</h2>
                <p>Role: {user.role}</p>
                {/* <button className='buttonSmall'>Send message</button>
                <button className='buttonSmall'>Delete user</button> */}
            </div>
        </div>

    )
}
export default UserCard