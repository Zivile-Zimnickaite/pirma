// import { useRef, useState } from "react";
// import '../App.css';
// import { Rating } from 'react-simple-star-rating';
// import ReviewPreview from "./Task14ReviewPreview";

// const PostCard = ({ post }) => {

//     const reviewInput = useRef()
//     const [getPosts, setPosts] = useState(post)

//     let rating = 50

//     function setRating(value) {
//         // Nesuprantu kaip suveikia tas value?
//         console.log(value)
//     }

//     function sortReviews() {
//         const post = { ...getPosts }
//         post.reviews = post.reviews.sort((a, b) => b.rating - a.rating)
//         setPosts(post)

//     }

//     function addReview(e) {
//         const review = {
//             comment: reviewInput.current.value,
//             rating
//         }

//         const post = { ...getPosts }
//         // kaip suprasti ta destrukturizavima?

//         post.reviews.push(review)
//         setPosts(post)
//     }

//     function countRating() {
//         const totalRating = getPosts.reviews.reduce((a, b) => a + b.rating, 0)
//         return totalRating / getPosts.reviews.length
//     }

//     countRating()

//     // neveikia count rating

//     return (

//         <div className="userForm">
//             <Rating ratingValue={countRating} fillColor={"blue"} readonly />

//             <img className="userImagePostCard" src={post.photo} alt=""></img>
//             <div>
//                 <Rating ratingValue={rating} onClick={(value) => rating = value} />
//                 <input ref={reviewInput} type="text" placeholder="Your comment"></input>
//                 <button onClick={addReview} >Add</button>
//                 {/* kada rasome tas arrow f-jas? */}
//             </div>
//             <div>
//                 <button onClick={sortReviews}>Sort from hight to low</button>
//                 {getPosts.reviews.map((x, i) => <ReviewPreview review={x} key={i} />)}
//                 {/* kodel reviews daugiskaita?? */}

//             </div>

//         </div >


//     );
// }

// export default PostCard;