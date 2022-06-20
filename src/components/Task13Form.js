// import { useRef, useState } from "react";

// import '../App.css';

// const UserForm = ({ add }) => {

//     const nameValue = useRef();
//     const locationValue = useRef();
//     const genderValue = useRef();
//     const photoValue = useRef();

//     const [getError, setError] = useState("")


//     function addNewUser() {
//         const user = {
//             photo: photoValue.current.value,
//             name: nameValue.current.value,
//             gender: genderValue.current.value,
//             location: locationValue.current.value
//         }

//         console.log(user)

//         let badLocation = true
//         let badGender = true
//         let badUrl = true

//         if (user.photo === user.photo.includes('http')) {
//             badUrl = false
//             if (badUrl) return setError('Please provide correct url')
//         }

//         if (user.name.length === 0) { return setError('Please provide name') }

//         if (user.location.toLowerCase() === "vilnius" || user.location.toLowerCase() === "kaunas" || user.location.toLowerCase() === "siauliai" || user.location.toLowerCase() === "klaipeda" || user.location.toLowerCase() === "trakai") {
//             badLocation = false
//         }
//         if (badLocation) return setError("Location is not valid")

//         if (user.gender.toLowerCase() === "male" || user.gender.toLowerCase() === "female") {
//             badGender = false
//         }
//         if (badGender) return setError("Gender must be male or female")

//         setError("")
//         add(user)
//     }


//     return (
//         <div className="userForm">
//             <input ref={photoValue} type="text" placeholder="Photo url"></input>
//             <input ref={nameValue} name="name" className="inputField" type="text" placeholder="Name"></input>
//             <input ref={locationValue} name="location" className="inputField" type="text" placeholder="Location"></input>
//             <input ref={genderValue} name="gender" className="inputField" type="text" placeholder="Gender"></input>
//             <button onClick={addNewUser} className="addUserButton">Add User</button>
//             <div>
//                 <h3>{getError}</h3>
//             </div>
//         </div>


//     );
// }

// export default UserForm;
