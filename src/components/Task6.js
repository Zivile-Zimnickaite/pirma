// import { useState } from "react";
// import App from "../App";
// import '../App.css';



// const UserCard = ({ user }) => {

//     const [getState, setState] = useState(user)


//     function cardName() {
//         const newUserName = { ...getState }
//         newUserName.name = "Laura"
//         setState(newUserName)

//     }

//     function cardAge() {
//         const newUserAge = { ...getState }
//         newUserAge.age = "21"
//         setState(newUserAge)

//     }

//     function cardCity() {
//         const newUserCity = { ...getState }
//         newUserCity.city = "Alytus"
//         setState(newUserCity)

//     }

//     const style = {
//         backgroundColor: "grey",
//         width: "500px",
//         height: "500px",
//         display: "flex",
//         flexDirection: "column",
//         flexWrap: "wrap",
//         alignItems: "center"
//     }

//     const buttonStyle = {
//         backgroundColor: "yellow",
//         width: "250px",
//         height: "30px",
//         margin: "3px"
//     }

//     return (
//         <div className="center">
//             <div className="card" style={style}>
//                 <h1>{getState.name}</h1>
//                 <h1>{getState.age}</h1>
//                 <h1>{getState.city}</h1>
//                 <button style={buttonStyle} onClick={cardName}>Change name</button>
//                 <button style={buttonStyle} onClick={cardAge}>Change age</button>
//                 <button style={buttonStyle} onClick={cardCity}>Change city</button>
//             </div >
//         </div>
//     );
// };



// export default UserCard;