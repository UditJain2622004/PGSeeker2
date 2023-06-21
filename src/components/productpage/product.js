import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import Amenities from "./Amenities";
import UseStateDesc from "./UseStateDesc";

import Header from "./Header";
import Footer from "../Homepage/Footer";
import { useLocation } from "react-router-dom";
import { getReviews } from "../../api";
import { useState, useEffect } from "react";

const Product = () => {
  const location = useLocation();
  const pg = location.state;
  // console.log(pg);

  const [reviews, setReviews] = useState([]);
  const amenities = ["wifi", "ac", "parking", "battery", "tv", "fridge"];
  const rules = ["smoking", "guests", "loud-music"];

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getReviews(pg._id);
      // console.log(fetchedReviews);
      // Fetch the amenities data asynchronously
      // const amenitiesData = await getAmenities(); // Replace with your actual data fetching function

      // Update the state with the fetched data
      // setAmenities(amenitiesData);
      // console.log(reviews);
      // console.log(fetchedReviews.data.reviews);
      setReviews(fetchedReviews.data.reviews);
      // console.log(reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <Header />
      <Amenities amenities={amenities} />
      {/* <UseStateDesc /> */}
      <Footer />
    </div>
  );
};

export default Product;
