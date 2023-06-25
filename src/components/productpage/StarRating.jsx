// import React from "react";

// const StarRating = ({ rating }) => {
//   const MAX_RATING = 5; // Maximum rating value

//   // Calculate the number of filled and empty stars
//   const filledStars = Math.round(rating);
//   const emptyStars = MAX_RATING - filledStars;

//   // Create an array of stars
//   const stars = Array(MAX_RATING)
//     .fill(null)
//     .map((_, index) => {
//       if (index < filledStars) {
//         return <i key={index} className="fas fa-star filled-star"></i>;
//       } else {
//         return <i key={index} className="fas fa-star empty-star"></i>;
//       }
//     });

//   return <div>{stars}</div>;
// };

// export default StarRating;
import React from "react";

const StarRating = ({ rating }) => {
  const MAX_RATING = 5; // Maximum rating value

  // Calculate the number of filled, partially filled, and empty stars
  const filledStars = Math.floor(rating); // Whole filled stars
  const remainder = rating - filledStars; // Decimal portion
  const partiallyFilledStarWidth = `${remainder * 100}%`;

  // Create an array of stars
  const stars = Array(MAX_RATING)
    .fill(null)
    .map((_, index) => {
      if (index < filledStars) {
        return <i key={index} className="fas fa-star filled-star"></i>;
      } else if (index === filledStars) {
        return (
          <i key={index} className="fas fa-star partially-filled-star">
            <div
              className="star-clip-mask"
              style={{ width: partiallyFilledStarWidth }}
            >
              <i className="fas fa-star filled-star"></i>
            </div>
          </i>
        );
      } else {
        return <i key={index} className="fas fa-star empty-star"></i>;
      }
    });

  return (
    <div>
      {stars}({rating})
    </div>
  );
};

export default StarRating;
