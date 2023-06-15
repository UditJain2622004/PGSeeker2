import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from 'react'
import Amenities from "./Amenities";
import UseStateDesc from "./UseStateDesc";

import Header from './Header';

const amenitiesData = [
  { id: 1, name: "Wifi", icon: "" },
  { id: 2, name: "AC", icon: "" },
  { id: 3, name: "Power Backup", icon: "" },
  { id: 4, name: "Room Cleaning", icon: "" },
  { id: 5, name: "Parking", icon: "" },
  { id: 6, name: "TV", icon: "" },
  { id: 7, name: "4-Wheeler Parking", icon: "" },
  { id: 8, name: "Fridge", icon: "" },
  { id: 9, name: "Water Cooler", icon: "" },
  { id: 10, name: "Warden", icon: "" },
  { id: 11, name: "Microwave", icon: "" },
  { id: 12, name: "Veg", icon: "" },
  { id: 13, name: "Non-Veg", icon: "" },
  { id: 14, name: "Lift", icon: "" },
];

const product = () => {
  const amenities = amenitiesData.filter((amenity) => {
    // replace this condition with the one that checks if the PG owner entered this amenity
    return amenity.id % 2 === 0;
  });
  return (
    <div>
      <Header />
      <Amenities amenities={amenities} />
      <UseStateDesc />
    </div>
  );
};

export default product
