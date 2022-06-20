//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
// import '../App.css';
// // import App from '../App';

// const UserCard = ({ user }) => {


//     const roundImage = {
//         borderRadius: user.gender === 'female' ? '150px' : '0'
//     }

//     let flag = ""

//     if (user.nat === 'DE') flag = <img src="https://i.pinimg.com/originals/03/e8/43/03e843d355743dc47b99765a46085382.png" alt="" style={{ height: '50px', width: '50px' }}></img >



//     return (
//         <div className='mainComponent'>
//             < div className='card' >
//                 <img style={roundImage} src={user.picture.large} alt="" ></img>
//                 <h3>{user.name.title} {user.name.first} {user.name.last}</h3>
//                 <div>Gender: {user.gender}</div>
//                 <div>Email: {user.email}</div>
//                 <div>City: {user.location.city}</div>
//                 <div>Nationality: {user.nat}</div>
//                 {flag}
//             </div >
//         </div >

//     );
// };


// export default UserCard;
