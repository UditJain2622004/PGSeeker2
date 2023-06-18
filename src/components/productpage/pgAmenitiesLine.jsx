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
//         <div class="col-6 col-md-4">
//           <label htmlFor="pgamenities">
//             <p className="input-heading">{heading}</p>
//           </label>
//         </div>
//         <div class="col-12 col-md-8">
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
  return (
    <>
      <div className={`row amenities parts part${partNumber}`}>
        <div class="col-6 col-md-4">
          <label htmlFor="pgamenities">
            <p className="input-heading">{heading}</p>
          </label>
        </div>
        <div class="col-12 col-md-8 col-px-0">
          <div className="amenities-row row">
            <div className="col-3">
              <CheckBoxInput
                fields={[amenities[start]]}
                type={stateVar}
                handleChange={handleChange}
                allowed={false}
              />
            </div>
            <div className="col-4">
              <CheckBoxInput
                fields={[amenities[start + 1]]}
                type={stateVar}
                handleChange={handleChange}
                allowed={false}
              />
            </div>
            <div className="col-5">
              <CheckBoxInput
                fields={[amenities[start + 2]]}
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
