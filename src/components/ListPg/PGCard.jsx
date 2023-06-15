import React from "react";
import "./PGCard.css";

const PGCard = ({ pg }) => {
  const sharingoption = pg.sharing.slice(0, 2).map((el) => {
    const share = {
      1: "Single",
      2: "Double",
      3: "Triple",
      4: "Four",
      5: "Five",
    };
    let sharing = `${share[el.occupancy]} sharing`;
    if (el.ac) sharing += " with AC";
    return { sharing, price: `Rs.${el.price}` };
  });

  const mainAmenities =
    pg.amenities.length > 5 ? pg.amenities.slice(0, 5) : pg.amenities;
  return (
    <section className="pg-card" style={{ backgroundColor: "#ffffff" }}>
      {/* <section className="pg-card" style={{ backgroundColor: "#eee" }}> */}
      <div className="container px-0">
        <div className="full-card col-md-12 col-xl-10">
          <div className="card shadow-0 border ">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="ripple ripple-surface">
                    <img src={pg.image} className="w-100" alt="product" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div
                          className="mask"
                          style={{
                            // backgroundColor: "rgba(0, 253, 253, 0.15)",
                            backgroundColor: "rgba(253, 253, 253, 0.15)",
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div class={`banner banner-${pg.type}`}>{pg.type}</div>
                  <h5>
                    {pg.name}
                    <span className="locality"> in {pg.address.locality}</span>
                  </h5>
                  <p className="description">
                    {pg.description.length > 110
                      ? pg.description.slice(0, 110) + "..."
                      : pg.description}
                  </p>
                  {/* <hr /> */}

                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>

                    {/* <span>
                      <img
                        src="./images/../../../../public/male.png"
                        alt="icon"
                        srcset=""
                      />
                      {pg.gender}
                    </span> */}
                  </div>
                  <div className="li"></div>

                  <div class="sharing">
                    <div class="left-side">
                      <div class="text">
                        <p className="sharing-text">
                          {sharingoption[0].sharing}
                        </p>
                        <p className="sharing-price">
                          {sharingoption[0].price}
                        </p>
                      </div>
                    </div>
                    <div class="right-side">
                      <div class="line"></div>
                      <div class="text">
                        <p className="sharing-text">
                          {sharingoption[1].sharing}
                        </p>
                        <p className="sharing-price">
                          {sharingoption[1].price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="li"></div>

                  <div className="mt-1 mb-0 text-muted small">
                    <div className="amenities-group">
                      {mainAmenities.map((el) => {
                        return (
                          <>
                            {/* <span className="text-primary"> • </span> */}
                            <span className="amenities"> • {el}</span>
                          </>
                        );
                      })}
                    </div>

                    <div className="li"></div>

                    {/* <span>{pg.amenities}</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>Best finish</span>
                    <br />
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>Casual</span> */}
                    <br />
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">{pg.location}</p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">Rs.{pg.price}</h4>
                    <span className="text-success">
                      <s>Onwards</s>
                    </span>
                  </div>
                  <div className="d-flex flex-column mt-4">
                    <button
                      className="btn btn-primary btn-sm blue_bg"
                      type="button"
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-outline-primary btn-sm mt-2 blue_bg_1"
                      type="button"
                    >
                      Contact Owner
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PGCard;
