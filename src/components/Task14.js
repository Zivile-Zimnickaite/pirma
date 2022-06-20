
// import '../App.css';
// import { useRef, useState } from 'react';

// const AddForm = ({ get, set }) => {

//     const photoInput = useRef('')
//     const [getError, setError] = useState("")

//     function addNewUser() {

//         const post = {
//             photo: photoInput.current.value,
//             reviews: []
//         }
//         if (post.photo.length === 0) return setError('Please provide photo')
//         setError("")

//         set([...get, post])
//         // kaip tas ...get susisieja su post?
//         console.log(post)
//     }

//     return (

//         <div className="addUser">
//             <input ref={photoInput} type="text" placeholder="Photo url"></input>
//             <p>{getError}</p>
//             <button onClick={addNewUser} className="addUserButton">Add User</button>
//         </div>

//     )
// }

// export default AddForm;