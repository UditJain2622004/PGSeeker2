import React from 'react'
import nearby from "./images/nearby.png";
import affordable from "./images/affordable.png"
import reviews from "./images/reviews.png"
const Offers = () => {
  return <section>
    <div className="container py-4 py-sm-5">
      <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
        What We Offer
      </h2>
      <div className="d-flex justify-content-center">
        <p className="ff_space text-center text_rgba_blac fw-normal fs_sm col-lg-9 mb-0">
          The listed services are offered to all our customers. We assure you the best deals in all our properties and the chance to live a more luxurious life with lesser cost.
        </p>
      </div>
      <div className="row pt-5 justify-content-between ">
        {/* row start */}
        <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
          <div className=" bg-white card_1 rounded text-center h-100 p-2 m-3">
            <img className="col-2 p-0 py-4" src={nearby} alt="location" />
            <h5 className="m-0 px-5 ff_space fw_400 fs_lg">Find PGs Near You </h5>

          </div>
        </div>
        {/* 2 */}
        <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
          <div className=" bg-white card_1 rounded text-center h-100 p-2 m-3">
            <img className="col-2 p-0 py-4" src={affordable} alt="location" />
            <h5 className="m-0 px-5 ff_space fw_400 fs_lg">Affordable Prices</h5>

          </div>
        </div>
        {/* 3 */}
        <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
          <div className=" bg-white card_1 rounded text-center h-100 p-2 m-3">
            <img className="col-2 p-0 py-4" src={reviews} alt="location" />
            <h5 className="m-0 px-5 ff_space fw_400 fs_lg">Reviews and Ratings</h5>

          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Offers
