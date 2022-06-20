//Task16  ROUTES-------pradžia--------------------------------------

// Create static toolbar (in app.js)
// create static footer (in app.js)
// create these routes and pages:
// userProfile (show some info of user)
// contacts (some random contacts)
// photoGallery (gallery of random photos, fetch them when user comes to this page) 


import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';



function App() {

  return (


    <BrowserRouter>

      <div className='toolbarNav'>
        <h3>Home page</h3>
        <h3>Create message page</h3>
      </div>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/createmessage" element={<Gallery />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>


    </BrowserRouter>

  );
}


export default App;





//Task16-------pabaiga--------------------------------------



// import { useState, useEffect } from "react"
// import SingleProduct from './components/Task15';
// import './App.css';

// // https://dummyjson.com/products

// function App() {


//   const [getProducts, setProducts] = useState([])


//   useEffect(() => {

//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data.products)
//         console.log(data)
//       })

//   }, [])



//   return (
//     <div className="d-flex flex-wrap">

//       {getProducts.map(x => <SingleProduct key={x.id} product={x} />)}

//     </div>
//   );
// }

// export default App;


//Task15-------pradzia--------------------------------------

// function App() {

//   const [getCounter, setCounter] = useState(0)
//   const [getInputColor, setInputColor] = useState('#ffffff')
//   let inputText = useRef()

//   function changeColor() {
//     setCounter(inputText.current.value.length)
//   }

//   useEffect(() => {
//     console.log(getCounter)
//     if (getCounter < 10) setInputColor('#f9f9f9')
//     if (getCounter >= 10 && getCounter < 20) { setInputColor('rgba(128, 253, 117, 0.257') }
//     if (getCounter >= 20 && getCounter < 30) { setInputColor('#f4fd75') }
//     if (getCounter >= 30 && getCounter < 40) { setInputColor('#fdc075') }
//     if (getCounter >= 40 && getCounter < 50) { setInputColor('#fd7575') }

//   }, [getCounter])


//   return (

//     <div>
//       <h1>{getCounter}</h1>
//       <input style={{ backgroundColor: getInputColor }} type="text" ref={inputText} onChange={changeColor}></input>

//     </div >

//   )


// }

// export default App;

//Task15-------pabaiga--------------------------------------

//Task14-------pradzia--------------------------------------
// import { Rating } from 'react-simple-star-rating'
// import AddForm from "./components/Task14";
// import PostCard from "./components/Task14PostCard";

// function App() {

//   const [getPosts, setPosts] = useState([])

//   function handleRating() {

//   }



//   return (
//     <div className='App'>



//       <AddForm get={getPosts} set={setPosts}></AddForm>

//       <div className="postCard usersContainer">


//         {getPosts.map((x, i) => <PostCard post={x} key={i}></PostCard>)}


//       </div>

//     </div>
//   )
// }




// export default App;

//Task14-------pabaiga--------------------------------------

//Task13-------pradzia--------------------------------------

// import UserForm from "./components/Task13Form";
// import SingleUser from "./components/Task13User";
// import Filter from "./components/Task13Filter";

// import './App.css';

// function App() {

//   const [getUser, setUser] = useState([])
//   const [getFilteredUsers, setFilteredUsers] = useState([])
//   const [getFilterTrigger, setFilterTrigger] = useState(false)

//   function addUser(user) {
//     console.log(user)
//     setUser([...getUser, user])

//   }

//   function deleteUser(index) {
//     if (getFilterTrigger) {
//       const userArr = getFilteredUsers.filter((x, i) => i !== index)
//       setFilteredUsers([...userArr])

//     } else {

//       const userArr = getUser.filter((x, i) => i !== index)
//       // visa si eilute su filtravimu neaiski

//       setUser([...userArr])
//     }

//   }



//   function filterUsers(values) {
//     let users = [...getUser]
//     let filterOn = false


//     if (values.location) {
//       users = users.filter(x => x.location === values.location)
//       filterOn = true
//     }
//     if (values.gender) {
//       users = users.filter(x => x.gender === values.gender)
//       filterOn = true
//     }

//     setUser(users)
//     setFilterTrigger(filterOn)
//   }

//   function renderUsers() {
//     return getFilterTrigger ? getFilteredUsers : getUser
//   }



//   return (

//     <div className="App">
//       <div className="main">

//         <div className="userFillForm">
//           <Filter filter={filterUsers}></Filter>
//           <UserForm add={addUser}></UserForm>

//         </div>

//         <div className="usersContainer">
//           {renderUsers().map((x, i) => <SingleUser del={() => deleteUser(i)} key={i} user={x} />)}
//           {/* //nesuprantu kada naudoti arrow f-ja */}
//         </div>
//       </div>


//     </div>

//   );
// }


// export default App;

// //Task13-------pabaiga--------------------------------------



// //Task12-------pradzia--------------------------------------

// import Quiz from './components/Task12.SingleQuestion';
// import EndGame from "./components/Task12.EndGame";

// const quiz = [
//   {
//     question: "What is the capital of Finland?",
//     answer: "Helsinki"
//   },
//   {
//     question: "What is the name of Bridget Jones' baby in the third Bridget Jones film?",
//     answer: "William"
//   },
//   {
//     question: "At the time of writing (March 2022) how many episodes of The Simpsons are there?",
//     answer: "720"
//   },
//   {
//     question: "Which country is brie cheese originally from?",
//     answer: "France"
//   },
//   {
//     question: "What year was Heinz established?",
//     answer: "1869"
//   }
// ]


// function App() {

//   const [getIndex, setIndex] = useState(0)
//   const [getPoints, setPoints] = useState(0)



//   function answerGot(inputValue) {
//     const currentQuestionAnswer = quiz[getIndex].answer

//     if (currentQuestionAnswer.toLocaleLowerCase() === inputValue.toLowerCase())
//       setPoints(getPoints + 1)
//     setIndex(getIndex + 1)
//   }


//   function playAgain() {
//     setIndex(0);
//     setPoints(0)
//   }

//   return (

//     <div className="App">

//       {getIndex >= 5 ?
//         <EndGame points={getPoints} playAgain={playAgain} ></EndGame> :
//         <Quiz question={quiz[getIndex]} answer={answerGot} />
//       }
//     </div>

//   );
// }


// export default App;

//Task12-------pabaiga--------------------------------------

//Task11-------pradzia--------------------------------------

// import InputsTask from './components/Task11';



// function App() {

//   const [getCount, setCount] = useState(0)

//   const inputSymbols = useRef()

//   function count() {
//     setCount(inputSymbols.current.value.length)
//   }

//   return (
//     <div>
//       <div> Symbols: {getCount}</div>
//       <input ref={inputSymbols} type="text" />
//       <button onClick={count}>Count</button>
//     </div>
//   )
// }




// export default App;

//Task11-------pabaiga--------------------------------------








//Task10-------pradzia----------------------------------------

// import MonsterGame from "./components/Task10";

// function App() {

//   const images = [
//     "https://media.istockphoto.com/photos/halloween-monster-picture-id178640157?k=20&m=178640157&s=612x612&w=0&h=jJgl-rKfAfmHNzP-4SsnwluHiv6aIAUCzDEGbiccTj4=",
//     "https://cdn.pixabay.com/photo/2014/08/25/09/26/monster-426996__340.jpg",
//     "https://cdn.pixabay.com/photo/2014/08/25/09/25/monster-426993_640.jpg",
//     "https://cdn.pixabay.com/photo/2014/12/10/17/26/horror-563247__340.jpg",
//     "https://thumbs.dreamstime.com/b/smoke-monster-3086241.jpg"
//   ]

//   return (
//     <div className="App">

//       <MonsterGame></MonsterGame>
//       <div className="hit">
//         HIT
//       </div>
//       <h1>Start game</h1>
//       <MonsterGame></MonsterGame>

//     </div>


//   )

// }


// export default App;

// Task10 pabaiga------------------------------------------




//Task9-------pradzia----------------------------------------

// import MonsterGame from "./components/Task9";

// function App() {

//   const [getImageIndex, setImageIndex] = useState(0)


//   const images = [
//     "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d",
//     "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
//     "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip",
//     "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
//   ]


//   function pictureChange(value) {
//     if (value === "next") {
//       if (getImageIndex === 3) {
//         setImageIndex(0)
//       } else {
//         setImageIndex(getImageIndex + 1)
//       }
//     }

//     if (value === "previous") {
//       if (getImageIndex === 0) {
//         setImageIndex(3)
//       } else {
//         setImageIndex(getImageIndex - 1)
//       }
//     }
//   }

//   return (
//     <div className="App">

//       <div className="box1">
//         <img src={images[getImageIndex]} alt="" />
//       </div>
//       <MonsterGame change={pictureChange} value="previous"></MonsterGame>
//       <MonsterGame change={pictureChange} value="next"></MonsterGame>
//     </div >

//   );
// }


// export default App;

// Task9 pabaiga------------------------------------------



// Task8 pradzia---------------------------------------------------------------

// import Color from "./components/Task8";

// function App() {

//   const [getColor, setColor] = useState('grey')


//   function colorChange() {
//     const randomIndex = Math.floor(Math.random() * colors.length)
//     const randomColor = colors[randomIndex]

//     console.log(randomColor)

//     setColor(randomColor.hex)
//   }

//   return (
//     <div className="App">

//       <div className="box" style={{ backgroundColor: getColor }}>
//       </div>
//       <Color trigger={colorChange}></Color>

//     </div>

//   );
// }


// export default App;

// Task8 pabaiga---------------------------------------------------------------


// Task7 pradzia---------------------------------------------------------------

// import Color from "./components/task7";

// function App() {

//   return (
//     <div className="App">

//       {colors.map((x, i) => <Color key={i} item={x} />)}

//     </div>

//   );
// }


// export default App;

// Task7 pabaiga---------------------------------------------------------------




// Task6 pradzia---------------------------------------------------------------

// import UserCard from "./components/Task6";

// function App() {

//   const user = {
//     name: "Zivile",
//     age: "20",
//     city: "Vilnius"
//   }



//   return (
//     <div className="App">
//       <UserCard user={user} />
//     </div>

//   );
// }


// export default App;

// Task6 pabaiga---------------------------------------------------------------


// import Counter from "./components/Task5";

// function App() {



//   return (
//     <div className="App">

//       <Counter number={5} />
//       <Counter number={55} />
//       <Counter number={60} />



//     </div>

//   );
// }




// export default App;



// Task4 pradzia---------------------------------------------------------------

// import ColorBox from './components/Task4'

// function App() {




//   return (
//     <div className="App">

//       <ColorBox />

//     </div>

//   );
// }



// export default App;

// Task4 pabaiga---------------------------------------------------------------




// Task3 pradzia---------------------------------------------------------------

// import './App.css';
// import UserCard from './components/Task3'

// const users = [
//   {
//     "gender": "female",
//     "name": {
//       "title": "Miss",
//       "first": "Åse",
//       "last": "Richardsen"
//     },
//     "location": {
//       "street": {
//         "number": 138,
//         "name": "Fisker Syversens vei"
//       },
//       "city": "Brekkeåsen",
//       "state": "Vest-Agder",
//       "country": "Norway",
//       "postcode": "7005",
//       "coordinates": {
//         "latitude": "55.6763",
//         "longitude": "64.4198"
//       },
//       "timezone": {
//         "offset": "-5:00",
//         "description": "Eastern Time (US & Canada), Bogota, Lima"
//       }
//     },
//     "email": "ase.richardsen@example.com",
//     "login": {
//       "uuid": "fa13031e-53c9-4248-875f-ce78ef8b059f",
//       "username": "yellowrabbit936",
//       "password": "elliott",
//       "salt": "mWIiqHWC",
//       "md5": "0613a10bba095d4651bd5b5e8050dbb9",
//       "sha1": "7889b98b5768de3169b5680fe3c0a4453ff4fa34",
//       "sha256": "b3aabaaf15edc053e9cbb76edc74574f7a3647c2d9dc4e09e3f4dc9ff43ed729"
//     },
//     "dob": {
//       "date": "1970-11-04T22:44:24.711Z",
//       "age": 52
//     },
//     "registered": {
//       "date": "2011-03-06T09:15:55.611Z",
//       "age": 11
//     },
//     "phone": "85703594",
//     "cell": "99401628",
//     "id": {
//       "name": "FN",
//       "value": "04117030828"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/84.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/84.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/84.jpg"
//     },
//     "nat": "NO"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "Miss",
//       "first": "Tessa",
//       "last": "Gonzalez"
//     },
//     "location": {
//       "street": {
//         "number": 8326,
//         "name": "Avenue du Château"
//       },
//       "city": "Roubaix",
//       "state": "Côte-D'Or",
//       "country": "France",
//       "postcode": 71425,
//       "coordinates": {
//         "latitude": "-6.3915",
//         "longitude": "46.4903"
//       },
//       "timezone": {
//         "offset": "+9:30",
//         "description": "Adelaide, Darwin"
//       }
//     },
//     "email": "tessa.gonzalez@example.com",
//     "login": {
//       "uuid": "f701a4e6-c7ff-460e-91c3-a0aecb8c26e9",
//       "username": "whitelion278",
//       "password": "futbol",
//       "salt": "cN3WRGWk",
//       "md5": "34552b8a2cae92fefcb69403a51ecd10",
//       "sha1": "f6be669b7b8c78151d3874cc1d7b92d92c5b4ae8",
//       "sha256": "3240c87695d116cf4f6bcefd60486f937a73635bb490cb0c398f7634fb188338"
//     },
//     "dob": {
//       "date": "1965-11-06T17:40:50.401Z",
//       "age": 57
//     },
//     "registered": {
//       "date": "2005-05-19T02:47:48.270Z",
//       "age": 17
//     },
//     "phone": "02-00-72-62-08",
//     "cell": "06-44-53-73-57",
//     "id": {
//       "name": "INSEE",
//       "value": "2NNaN55954959 27"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/58.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
//     },
//     "nat": "FR"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "Mr",
//       "first": "Yasin",
//       "last": "Eira"
//     },
//     "location": {
//       "street": {
//         "number": 4971,
//         "name": "Godliasvingen"
//       },
//       "city": "Sætre",
//       "state": "Vestfold",
//       "country": "Norway",
//       "postcode": "6996",
//       "coordinates": {
//         "latitude": "-54.3768",
//         "longitude": "-38.9275"
//       },
//       "timezone": {
//         "offset": "+10:00",
//         "description": "Eastern Australia, Guam, Vladivostok"
//       }
//     },
//     "email": "yasin.eira@example.com",
//     "login": {
//       "uuid": "29300c49-40d7-4795-859b-89e87e8e4fc3",
//       "username": "happydog480",
//       "password": "shelly",
//       "salt": "CQNck3X8",
//       "md5": "d765745d0cf35f2fcf86a9d475add7f7",
//       "sha1": "cdf3f750c26299519a7255fb4062518d8bcca36e",
//       "sha256": "7f4874b7137844428ae6a145b8180737e3cf96d3995465b3d6f1a348e7416da8"
//     },
//     "dob": {
//       "date": "1963-07-20T00:36:57.018Z",
//       "age": 59
//     },
//     "registered": {
//       "date": "2009-01-18T20:00:05.967Z",
//       "age": 13
//     },
//     "phone": "34748385",
//     "cell": "49412367",
//     "id": {
//       "name": "FN",
//       "value": "20076318787"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/77.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/77.jpg"
//     },
//     "nat": "NO"
//   },
//   {
//     "gender": "male",
//     "name": {
//       "title": "Mr",
//       "first": "Darius",
//       "last": "Zauner"
//     },
//     "location": {
//       "street": {
//         "number": 5782,
//         "name": "Lessingstraße"
//       },
//       "city": "Flörsheim am Main",
//       "state": "Bayern",
//       "country": "Germany",
//       "postcode": 32235,
//       "coordinates": {
//         "latitude": "85.4630",
//         "longitude": "-123.3132"
//       },
//       "timezone": {
//         "offset": "+5:30",
//         "description": "Bombay, Calcutta, Madras, New Delhi"
//       }
//     },
//     "email": "darius.zauner@example.com",
//     "login": {
//       "uuid": "f74dfa7b-a02e-4cfc-a265-6c56c6d6d83e",
//       "username": "organiczebra982",
//       "password": "777777",
//       "salt": "SjfqsllF",
//       "md5": "d6964d406c8bc81f9ad51d8d8292e5b9",
//       "sha1": "df9966772d369361dedb117ed32e4a77b98cb5d1",
//       "sha256": "f8a5f8f86b71d23a365edd6cffe06c6a2fb0c250c59ea1baca04e06cb1f8d45e"
//     },
//     "dob": {
//       "date": "1962-11-01T17:38:12.653Z",
//       "age": 60
//     },
//     "registered": {
//       "date": "2011-07-28T08:34:42.212Z",
//       "age": 11
//     },
//     "phone": "0840-1291086",
//     "cell": "0173-9585088",
//     "id": {
//       "name": "",
//       "value": null
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/men/20.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
//     },
//     "nat": "DE"
//   },
//   {
//     "gender": "female",
//     "name": {
//       "title": "Miss",
//       "first": "Addison",
//       "last": "Jones"
//     },
//     "location": {
//       "street": {
//         "number": 7130,
//         "name": "Cranford Street"
//       },
//       "city": "Upper Hutt",
//       "state": "Gisborne",
//       "country": "New Zealand",
//       "postcode": 10448,
//       "coordinates": {
//         "latitude": "-2.2419",
//         "longitude": "-137.7404"
//       },
//       "timezone": {
//         "offset": "-6:00",
//         "description": "Central Time (US & Canada), Mexico City"
//       }
//     },
//     "email": "addison.jones@example.com",
//     "login": {
//       "uuid": "34ac9c43-2fb9-4941-bb21-4432809ff583",
//       "username": "sadbutterfly458",
//       "password": "999999",
//       "salt": "9yBUB8IN",
//       "md5": "d54cb201773c3ec620092ddcfd40d9c3",
//       "sha1": "89255e0d08bf701b296fb47edf21865b4ef4c08b",
//       "sha256": "b8f3db33afddc080d1e7a98093e2b33e23e7821990a9fa7a7245a846114ad578"
//     },
//     "dob": {
//       "date": "1990-08-05T16:12:31.398Z",
//       "age": 32
//     },
//     "registered": {
//       "date": "2004-02-09T06:12:52.535Z",
//       "age": 18
//     },
//     "phone": "(489)-361-8250",
//     "cell": "(129)-745-3189",
//     "id": {
//       "name": "",
//       "value": null
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/80.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
//     },
//     "nat": "NZ"
//   }
// ]


// function App() {

//   return (
//     <div className='bodyContainer'>
//       {users.map((x, i) => < UserCard user={x} key={i} />)}
//     </div>
//   )
// }
// export default App;


// / Task3 pabaiga---------------------------------------------------------------



// Task2 pradzia-----------------------------------------------------------------

// import './App.css';
// import ProductCard from './components/Task2'


// function App() {

//   const products =
//     [
//       {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//           "rate": 3.9,
//           "count": 120
//         }
//       },
//       {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//           "rate": 4.1,
//           "count": 259
//         }
//       },
//       {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//           "rate": 4.7,
//           "count": 500
//         }
//       },
//       {
//         "id": 4,
//         "title": "Mens Casual Slim Fit",
//         "price": 15.99,
//         "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         "rating": {
//           "rate": 2.1,
//           "count": 430
//         }
//       },
//       {
//         "id": 5,
//         "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//         "price": 695,
//         "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//           "rate": 4.6,
//           "count": 400
//         }
//       },
//       {
//         "id": 6,
//         "title": "Solid Gold Petite Micropave ",
//         "price": 168,
//         "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//           "rate": 3.9,
//           "count": 70
//         }
//       },
//       {
//         "id": 7,
//         "title": "White Gold Plated Princess",
//         "price": 9.99,
//         "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//           "rate": 3,
//           "count": 400
//         }
//       },
//       {
//         "id": 8,
//         "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
//         "price": 10.99,
//         "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//         "category": "jewelery",
//         "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//         "rating": {
//           "rate": 1.9,
//           "count": 100
//         }
//       },
//       {
//         "id": 9,
//         "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//         "price": 64,
//         "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//         "rating": {
//           "rate": 3.3,
//           "count": 203
//         }
//       },
//       {
//         "id": 10,
//         "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//         "price": 109,
//         "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//         "rating": {
//           "rate": 2.9,
//           "count": 470
//         }
//       },
//       {
//         "id": 11,
//         "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//         "price": 109,
//         "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//         "rating": {
//           "rate": 4.8,
//           "count": 319
//         }
//       },
//       {
//         "id": 12,
//         "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//         "price": 114,
//         "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//         "rating": {
//           "rate": 4.8,
//           "count": 400
//         }
//       },
//       {
//         "id": 13,
//         "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//         "price": 599,
//         "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//         "rating": {
//           "rate": 2.9,
//           "count": 250
//         }
//       },
//       {
//         "id": 14,
//         "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//         "price": 999.99,
//         "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//         "category": "electronics",
//         "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//         "rating": {
//           "rate": 2.2,
//           "count": 140
//         }
//       },
//       {
//         "id": 15,
//         "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//         "price": 56.99,
//         "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//         "rating": {
//           "rate": 2.6,
//           "count": 235
//         }
//       },
//       {
//         "id": 16,
//         "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//         "price": 29.95,
//         "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//         "rating": {
//           "rate": 2.9,
//           "count": 340
//         }
//       },
//       {
//         "id": 17,
//         "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//         "price": 39.99,
//         "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//         "rating": {
//           "rate": 3.8,
//           "count": 679
//         }
//       },
//       {
//         "id": 18,
//         "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
//         "price": 9.85,
//         "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//         "rating": {
//           "rate": 4.7,
//           "count": 130
//         }
//       },
//       {
//         "id": 19,
//         "title": "Opna Women's Short Sleeve Moisture",
//         "price": 7.95,
//         "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//         "rating": {
//           "rate": 4.5,
//           "count": 146
//         }
//       },
//       {
//         "id": 20,
//         "title": "DANVOUY Womens T Shirt Casual Cotton Short",
//         "price": 12.99,
//         "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//         "category": "women's clothing",
//         "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//         "rating": {
//           "rate": 3.6,
//           "count": 145
//         }
//       }
//     ]

//   return (
//     <div className='bodyContainer'>
//       {products.map((x, i) => < ProductCard key={i} item={x} />)}
//     </div>
//   )
// }
// export default App;


// Task2 pabaiga-----------------------------------------------------------------


// Task1 pradzia-----------------------------------------------------------------

// function App() {


//   const items = [
//     { name: "Jonas", city: "Vilnius", image: "https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324_3x4.jpg" },
//     { name: "PETRAS", city: "Klaipeda", image: "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg" },
//     { name: "Tadas", city: "Kaunas", image: "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" }
//   ]

//   return (
//     <div className='main'>
//       <Users
//         image={items[0].image}
//         name={items[0].name}
//         location={items[0].city}></Users>
//       <Users
//         image={items[1].image}
//         name={items[1].name}
//         location={items[1].city}></Users>
//       <Users
//         image={items[2].image}
//         name={items[2].name}
//         location={items[2].city}></Users>
//     </div>

//   );
// };

// export default App;
// Task1 pabaiga-----------------------------------------------------------------