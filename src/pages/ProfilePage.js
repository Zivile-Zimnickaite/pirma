import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatePhoto, updatePassword } from '../features/user'



const ProfilePage = () => {

    const dis = useDispatch()
    const disPhoto = useDispatch()
    const photoRef = useRef()
    const newPasswordRef = useRef()
    const userState = useSelector(state => state.user.value)




    function changePhoto() {
        const username = userState.currentUser.username
        let imageUrl = photoRef.current.value
        console.log(imageUrl)
        const userIndex = userState.allUsers.findIndex(x => x.username === username)
        console.log(userIndex)
        let userUpdated = { ...userState.currentUser }
        userUpdated.photo = imageUrl

        imageUrl = ""

        dis(updatePhoto({
            index: userIndex,
            current: userUpdated
        }))
    }

    function changePassword() {

        const username = userState.currentUser.username
        let newPassword = newPasswordRef.current.value
        console.log(newPassword)
        const userIndex = userState.allUsers.findIndex(x => x.username === username)
        console.log(userIndex)
        let passwordUpdated = { ...userState.currentUser }
        passwordUpdated.password = newPassword


        newPassword = ""

        disPhoto(updatePassword({
            index: userIndex,
            current: passwordUpdated
        }))


    }

    return (
        <div className='profilePageContainer flex-column'>

            <div className='d-flex align-items-center justify-content-center '>
                <div className='imgBox d-flex padding-5 margin-10'>
                    <img src={userState.currentUser.photo} alt=''></img>
                </div>
                <div>
                    <p className='padding-5'>{userState.currentUser.username}</p>
                    <p className='padding-5'>{userState.currentUser.role}</p>
                </div>
            </div>


            <div className='d-flex flex-column '>
                <input ref={photoRef} type='text' placeholder='photo url'></input>
                <button onClick={changePhoto} >Change photo</button>
                <input ref={newPasswordRef} type='text' placeholder='Type new password'></input>
                <button onClick={changePassword} >Change password</button>
            </div>

        </div>
    )
}

export default ProfilePage