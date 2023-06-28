import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import Amenities from "./Amenities";
import Rules from "./rules";
import ReviewSection from "./reviews";

import Header from "./Header";
import Footer from "../Homepage/Footer";
import { useLocation } from "react-router-dom";
import { getReviews } from "../../api";
import { useState, useEffect } from "react";

const getKeysWithTrueValues = (obj) => {
  return Object.keys(obj).filter((key) => obj[key] === true);
};

const Product = () => {
  const location = useLocation();
  const pg = location.state;

  const rules = getKeysWithTrueValues(pg.pgRules[0]);
  const amenities = getKeysWithTrueValues(pg.pgAmenities[0]);
  const {
    name,
    address,
    description,
    pgType,
    images,
    noticePeriodDays,
    securityDeposit,
    gateClosingTime,
    sharing,
    ratingsAverage,
  } = pg;
  const subRules = { noticePeriodDays, securityDeposit, gateClosingTime };
  const headerDetails = {
    name,
    description,
    address,
    pgType,
    images,
    sharing,
    ratingsAverage,
  };
  const [reviews, setReviews] = useState([]);
  // const amenities = ["wifi", "ac", "parking", "powerBackup", "tv", "fridge"];
  // const rules = ["smoking", "guests", "loudMusic"];

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await getReviews(pg._id);
      if (fetchedReviews.status === "success") {
        setReviews(fetchedReviews.data.reviews);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <Header headerDetails={headerDetails} />
      <Amenities amenities={amenities} />
      <Rules rules={rules} subRules={subRules} />
      <ReviewSection reviews={reviews} pgID={pg._id} />
      {/* <UseStateDesc /> */}
      <Footer />
    </div>
  );
};

export default Product;
