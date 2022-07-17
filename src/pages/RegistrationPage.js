import { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import user, { addUser } from "../features/user";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const userNameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()

    const nav = useNavigate()
    const dis = useDispatch()

    const allUsers = useSelector(state => state.user.value.allUsers)

    console.log(allUsers)

    const [error, setError] = useState(null)
    let role = user.role
    console.log(allUsers)


    function registerUser() {
        let invalid = false;
        let upperCaseLetters = /[A-Z]/g;
        let specialSymbols = /[!@#$%^& + "*"_ + "+"]/g;
        // const userExists = allUsers.find(x => x.username === user.userName)
        const user = {
            userName: userNameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value,
            role: role,
            photo: "https://odenta32.lt/wp-content/uploads/2022/05/blank-profile-picture-973460_640.png"
        }



        if (user.userName.length < 4 || user.userName.length > 20) invalid = "Username should be minimum 4 and maximum 20 symbols"

        // if (userExists) return setError('This username already taken')

        if (user.passOne.length < 4 || user.passOne.length > 20) invalid = "Password is too short or too long"
        if (!user.passOne.match(upperCaseLetters)) invalid = "Password should include Upper case Letters "
        if (!user.passOne.match(specialSymbols)) invalid = "Password should include special symbols (!@#$%^&*_+) "
        if (user.passOne !== user.passTwo) invalid = "Passwords should match"
        if (invalid) return setError(invalid)



        dis(addUser(user))
        nav('/login')
    }
    function addAdminRole() {
        return role = "admin"
    }
    function addRegularUserRole() {
        return role = "Regular user"
    }


    return (
        <div className="d-flex flex-column mainContainer margin-top-100">
            <input ref={userNameRef} type="text" placeholder="Username" />
            <input ref={passOneRef} type="text" placeholder="Password" />
            <input ref={passTwoRef} type="text" placeholder="Repeat password" />
            {error && <p className='errorMessage'>{error}</p>}

            <div className='role-box d-flex justify-content-space-around'>
                <button name='admin' onClick={addAdminRole} className='roleButton adminButton'>Choose to be Admin</button>
                <button name='regular' onClick={addRegularUserRole} className='roleButton regularUserButton'>Choose to be Regular User</button>
            </div>
            <button onClick={registerUser}>Register</button>
        </div>
    );
};





export default RegisterPage;