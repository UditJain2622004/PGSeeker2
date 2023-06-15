// import React, { useState } from "react";
// import "./Quality.css"
// const Qualities = () => {
//     const [inc, setInc] = useState(1);
//     const [Change, setChange] = useState(2);
//     let setOne = () => {
//         if (inc == 1) {
//             setInc(1);
//         } else {
//             setInc(inc - 1);
//         }
//     };
//     return <div>
//         <div className="col-lg-6 mt-4 mt-lg-0">
//             <div className="ms-lg-4">
//                 <h1 className=" ff_poppins fw-semibold fs_xl text-black m-0">
//                     Amenities
//                 </h1>

//                 <div className="amenities m-1 p-5">
//                     <div className="amenity d-flex gap-5 p-3">
//                         <div>
//                             <p>Wifi</p>
//                         </div>
//                         <div>
//                             <p>Power Backup</p></div>
//                         <div><p>Room Cleaning</p></div>
//                         <div><p>Parking</p></div>
//                     </div>
//                     <div className="amenity  d-flex gap-5 p-3">
//                         <div>
//                             <p>TV</p></div>
//                         <div>
//                             <p>4-Wheeler Parking</p></div>
//                         <div><p>Fridge</p></div>
//                         <div><p>Water Cooler RO</p></div>
//                     </div>
//                     <div className="amenity d-flex gap-5 p-3">
//                         <div>
//                             <p>Warden</p></div>
//                         <div>
//                             <p>Microwave</p></div>
//                         <div><p>Veg</p></div>
//                         <div><p>Meals</p></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// }

// export default Qualities

import React from "react";
import "./Amenities.css";

const Amenities = (props) => {
  const amenities = props.amenities;

  return (
    <div className="amenities-container">
      <h2 className="amenities-title">Amenities</h2>
      <div className="amenities-list">
        {amenities.map((amenity) => {
          return (
            <div className="amenity" key={amenity.id}>
              <div className="amenity-icon">{amenity.icon}</div>
              <div className="amenity-name">{amenity.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
