// import React from 'react';

// const PhotoSlider = ({ photos }) => {

//     const [getPhotoIndex, setPhotoIndex] = React.useState(0)

//     function changeIndex(value) {
//         if (value === "add") {
//             if (getPhotoIndex === photos.length - 1) {
//                 setPhotoIndex(0)
//             } else {
//                 setPhotoIndex(getPhotoIndex + 1)
//             }
//         }

//         if (value === "remove") {
//             if (getPhotoIndex === 0) {
//                 setPhotoIndex(photos.length - 1)
//             } else {
//                 setPhotoIndex(getPhotoIndex - 1)
//             }
//         }
//     }

//     return (
//         <div className="d-flex wrapper">

//             <div className="arrow arrowOne" onClick={() => changeIndex("remove")}>
//                 ◄
//             </div>

//             <img src={photos[getPhotoIndex]} alt="" />

//             <div className="arrow arrowTwo" onClick={() => changeIndex("add")}>
//                 ►
//             </div>

//         </div>
//     );
// };

// export default PhotoSlider;