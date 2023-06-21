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

// import React from "react";
// import "./Amenities.css";

// const Amenities = (props) => {
//   const amenities = props.amenities;

//   return (
//     <div className="amenities-container">
//       <h2 className="amenities-title">Amenities</h2>
//       <div className="amenities-list">
//         {amenities.map((amenity) => {
//           return (
//             <div className="amenity" key={amenity.id}>
//               <div className="amenity-icon">{amenity.icon}</div>
//               <div className="amenity-name">{amenity.name}</div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Amenities;

import React from "react";
import "./Amenities.css"; // Import your CSS file for styling
import pic from "./PG/pic3.png";
// Amenities
import wifi from "./images/A-img/wifi.png";
import ac from "./images/A-img/ac.png";
import parking from "./images/A-img/parking.png";
import wheeler from "./images/A-img/4-wheeler.png";
import room from "./images/A-img/clean.png";
import tv from "./images/A-img/television.png";
import fridge from "./images/A-img/fridge.png";
import water from "./images/A-img/water-cooler.png";
import warden from "./images/A-img/warden.png";
import wardrobe from "./images/A-img/wardrobe.png";
import microwave from "./images/A-img/microwave-oven.png";
import lift from "./images/A-img/lift.png";
import tiffin from "./images/A-img/tiffin.png";
import non_veg from "./images/A-img/non-veg.png";
import power from "./images/A-img/power-backup.png";
import laundary from "./images/A-img/laundry.png";
import washroom from "./images/A-img/washroom.png";
import self from "./images/A-img/self-cooking.png";
import cctv from "./images/A-img/cctv.png";

const Amenities = ({ amenities }) => {
  const availableAmenities = [
    { name: "wifi", icon: wifi },
    { name: "ac", icon: ac },
    { name: "fridge", icon: fridge },
    { name: "parking", icon: parking },
    { name: "wardrobe", icon: wardrobe },
    { name: "attachWashroom", icon: washroom },
    { name: "cleaning", icon: room },
    { name: "tv", icon: tv },
    { name: "library", icon: water },
    { name: "warden", icon: warden },
    { name: "microwave", icon: microwave },
    { name: "lift", icon: lift },
    { name: "tiffin", icon: tiffin },
    { name: "nonVeg", icon: non_veg },
    { name: "powerBackup", icon: power },
    { name: "laundry", icon: laundary },
    { name: "cctv", icon: cctv },
    { name: "selfCooking", icon: self },
  ];

  const isAvailable = (amenity) => amenities.includes(amenity);

  return (
    <div className=" amenities-container">
      <hr></hr>
      <h3 className="amenity-heading fs_xl py-2">Amenities</h3>

      <div className="amenities-list">
        {availableAmenities.map((amenity, i) => (
          <div key={i} className={`amenity`}>
            <div className="amenity-container">
              <img
                className="amenity-icon"
                src={amenity.icon}
                alt={amenity.name}
              />
            </div>
            <div>
              <span className="amenity-label">{amenity.name}</span>
              <p
                key={`A${i}`}
                className={`availability ${
                  isAvailable(amenity.name) ? "available" : "not-available"
                }`}
              >
                {isAvailable(amenity.name) ? "Available" : "Not Available"}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Amenities;
