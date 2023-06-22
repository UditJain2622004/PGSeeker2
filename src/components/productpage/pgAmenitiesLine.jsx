import React from "react";
import CheckBoxInput from "./checkboxInput";

const amenities = [
  "ac",
  "fridge",
  "parking",
  "tv",
  "nonVeg",
  "wardrobe",
  "wifi",
  "laundry",
  "microwave",
  "lift",
  "cleaning",
  "warden",
  "cctv",
  "selfCooking",
  "attachWashroom",
  "tiffin",
  "powerBackup",
  "library",
];
const amenities2 = {
  ac: "AC",
  fridge: "Fridge",
  wifi: "Wi-Fi",
  parking: "Parking",
  tv: "TV",
  nonVeg: "Non-Veg",
  tiffin: "Tiffin",
  laundry: "Laundry",
  lift: "Lift",
  microwave: "Microwave",
  cleaning: "Cleaning",
  warden: "Warden",
  cctv: "CCTV",
  selfCooking: "Self Cooking",
  attachWashroom: "Attach Washroom",
  wardrobe: "Wardrobe",
  powerBackup: "Power Backup",
  library: "Library",
};

// const amenitiesLine = ({
//   start,
//   end,
//   heading,
//   partNumber,
//   stateVar,
//   handleChange,
// }) => {
//   return (
//     <>
//       <div className={`row amenities parts part${partNumber}`}>
//         <div className="col-6 col-md-4">
//           <label htmlFor="pgamenities">
//             <p className="input-heading">{heading}</p>
//           </label>
//         </div>
//         <div className="col-12 col-md-8">
//           <div className="amenities-row">
//             <CheckBoxInput
//               fields={amenities.slice(start, end)}
//               type={stateVar}
//               handleChange={handleChange}
//               allowed={false}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const amenitiesLine = ({
  start,
  end,
  heading,
  partNumber,
  stateVar,
  handleChange,
}) => {
  const field1 = {};
  const field2 = {};
  const field3 = {};
  field1[amenities[start]] = amenities2[amenities[start]];
  field2[amenities[start + 1]] = amenities2[amenities[start + 1]];
  field3[amenities[start + 2]] = amenities2[amenities[start + 2]];
  return (
    <>
      <div className={`row amenities parts part${partNumber}`}>
        <div className="col-6 col-md-4">
          <label htmlFor="pgamenities">
            <p className="input-heading">{heading}</p>
          </label>
        </div>
        <div className="col-12 col-md-8 col-px-0">
          <div className="amenities-row row">
            <div className="col-3">
              <CheckBoxInput
                fields={field1}
                type={stateVar}
                handleChange={handleChange}
                allowed={false}
              />
            </div>
            <div className="col-4">
              <CheckBoxInput
                fields={field2}
                type={stateVar}
                handleChange={handleChange}
                allowed={false}
              />
            </div>
            <div className="col-5">
              <CheckBoxInput
                fields={field3}
                type={stateVar}
                handleChange={handleChange}
                allowed={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default amenitiesLine;
