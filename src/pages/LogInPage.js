import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../features/user";

const LoginPage = () => {
    const userNameRef = useRef()
    const passRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const allUsers = useSelector(state => state.user.value.allUsers)
    const [error, setError] = useState(null)

    function loginUser() {
        const user = {
            username: userNameRef.current.value,
            password: passRef.current.value,
        }

        const userLoggedIn = allUsers.find(x => x.username === user.username && x.password === user.password)

        console.log(userLoggedIn)
        if (!userLoggedIn) return setError("Please provide correct credentials")



        dis(setCurrentUser(userLoggedIn))

        nav('/profile')
    }

    return (
        <div className="d-flex flex-column mainContainer margin-top-100">
            <input ref={userNameRef} type="text" placeholder="Username" />
            <input ref={passRef} type="text" placeholder="password" />
            {error && <p className='errorMessage'>{error}</p>}
            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default LoginPage;