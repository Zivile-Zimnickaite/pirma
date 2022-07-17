import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from '../features/user'


function Toolbar() {

    const dis = useDispatch()
    const nav = useNavigate()
    const currentUser = useSelector(state => state.user.value.currentUser)

    function logout() {
        dis(setCurrentUser(null))
        nav('/login')
    }



    return (
        <div className='d-flex justify-content-space-between '>
            <div></div>
            {!currentUser ?
                <div className='d-flex justify-content-flex-end '>
                    <Link className='links ' to="./">Sign In</Link>
                    <Link className='links' to="./login">Log In</Link>

                </div> :
                <div className='d-flex '>
                    <Link className='links ' to="./">Sign In</Link>
                    <Link className='links' to="./login">Log In</Link>
                    <Link className='links' to="./users">All users</Link>
                    <Link className='links' to="./profile">Profile</Link>
                    <Link className='links' to="./conversations">Conversations</Link>
                    <button onClick={logout}>Log out</button>
                </div>


            }


        </div >
    )
}

export default Toolbar