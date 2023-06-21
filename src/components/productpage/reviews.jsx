import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import "./ReviewSection.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createReview } from "../../api";

// Mock data for reviews
// const reviewsData = [
//   {
//     id: 1,
//     name: "John Doe",
//     rating: 4,
//     description: "Great product!",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     rating: 5,
//     description: "Excellent service!",
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     rating: 4,
//     description: "Great product!",
//   },
//   {
//     id: 4,
//     name: "Jane Smith",
//     rating: 5,
//     description: "Excellent service!",
//   },
// ];

const ReviewSection = ({ reviews, pgID }) => {
  const user = useSelector((state) => state.user);
  console.log(reviews);
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    setReviewsData(reviews);
  }, [reviews]);

  console.log(reviewsData);

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const error = document.querySelector(".review-error");
  let loadingOverlay = document.querySelector(".loading-overlay");
  const handleSubmit = async (e) => {
    const showMsg = (text, type) => {
      error.textContent = text;
      if (type === "error") error.style.color = "red";
      else if (type === "success") error.style.color = "green";
      error.style.display = "block";
      setTimeout(() => {
        error.style.display = "none";
      }, 2000);
    };
    e.preventDefault();
    if (!user) {
      error.style.display = "block";
      return;
    } else if (reviewText === "") {
      showMsg("Review can not be blank!!", "error");
      return;
    } else if (rating === 0) {
      showMsg("Rating can not be 0!!", "error");

      return;
    }

    loadingOverlay.style.display = "block";
    const newReview = await createReview(reviewText, rating, pgID, user._id);
    loadingOverlay.style.display = "none";

    console.log(newReview);
    if (newReview.status === "success") {
      // reviews = [
      //   { ...newReview.data.review, user: { name: user.name } },
      //   ...reviewsData,
      // ];
      setReviewsData([
        { ...newReview.data.review, user: { name: user.name } },
        ...reviewsData,
      ]);
      showMsg("Review Given Successfully!!", "success");
    } else {
      if (newReview.error === "Duplicate pg,user entered") {
        showMsg("You have already given a review for this PG!!", "error");
      }
    }
    // if (!newReview.success) {
    //   if (newReview.error === "Duplicate pg,user entered") {
    //     showMsg("You have already given a review for this PG!!", "error");
    //   }
    // } else if(){
    //   setReviewsData([newReview, ...reviewsData]);
    //   showMsg("Review Given Successfully!!", "success");
    // }

    setRating(0);
    setReviewText("");
  };

  return (
    <div className="review-section container-fluid mb-4">
      <div className="bg_review">
        <hr />
        <h3 className="ff_space fs_xl amenity-heading m-4">Write a Review</h3>
        <div className="ff_space">
          <label className="fs_sm">Rating:</label>
          <ReactStars
            className="d-flex justify-content-center"
            count={5}
            value={rating}
            size={36}
            color2={"#ffd700"}
            onChange={(newRating) => setRating(newRating)}
            half={true}
            required
          />
        </div>
        <form
          className="review-form d-flex flex-column"
          onSubmit={handleSubmit}
        >
          <div className="align-items-center ff_space">
            <label className="review-label">Review:</label>
            <textarea
              className="review-name"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>
          <br />
          <div className="align-items-center ff_space">
            <button type="submit">Submit</button>
          </div>
          <p className="review-error">
            <Link to={"/login"}>Login</Link> to give review
          </p>
        </form>
        <br />
        <hr />
      </div>

      <div className="display-reviews-section">
        <h2 className="ff_space fs_xl amenity-heading">Reviews</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {/* Display existing reviews */}
          {reviewsData.map((review, i) => (
            <div
              className="d-flex justify-content-center align-items-center ff_space flex-column review_detail px-3 py-3 m-3"
              key={i}
            >
              <h3>{review.user.name}</h3>
              <ReactStars
                count={5}
                value={review.rating}
                size={24}
                color2={"#ffd700"}
                edit={false}
              />
              <p>{review.review}</p>
            </div>
          ))}
        </div>
        {reviewsData.length === 0 && <h3>No Reviews Yet...</h3>}
      </div>
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
    </div>
  );
};

export default ReviewSection;
