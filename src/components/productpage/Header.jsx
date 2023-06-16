// import React, { useState } from "react";
// import shoe from "./images/red_shoes_hearo.png";
// import black_shoe_hero from "./images/black_shoe_hero.png";
// import gray_shoe_hero from "./images/gray_shoe_hero.png";
// import red_black_shoe_hero from "./images/red_black_shoe_hero.png";
// import stars_5 from "./images/stars_5.png";
// import Compare from "./images/Compare.png";
// import Wishlist from "./images/Wishlist.png";
// import share from "./images/share.png";
// import fb from "./images/fb.png";
// import twit from "./images/twit.png";
// import pinterest from "./images/pinterest.png";
// import G from "./images/G.png";

// function Header() {
//     const [inc, setInc] = useState(1);
//     const [Change, setChange] = useState(2);
//     let setOne = () => {
//         if (inc == 1) {
//             setInc(1);
//         } else {
//             setInc(inc - 1);
//         }
//     };
//     return (
//         <>
//             <section className="py-lg-5">
//                 <div className="product-product- py-4 py-lg-5">
//                     <div className="row align-items-center justify-content-between">
//                         <div className="col-lg-6">
//                             <div className="h-100">
//                                 <img
//                                     className={Change == 1 ? "d-flex w-100" : "d-none"}
//                                     src={""}
//                                     alt="black_shoe_hero"
//                                 />
//                                 <img
//                                     className={Change == 2 ? "d-flex w-100" : "d-none"}
//                                     src={""}
//                                     alt="shoe"
//                                 />
//                                 <img
//                                     className={Change == 3 ? "d-flex w-100" : "d-none"}
//                                     src={""}
//                                     alt="gray_shoe_hero"
//                                 />
//                                 <img
//                                     className={Change == 4 ? "d-flex w-100" : "d-none"}
//                                     src={red_black_shoe_hero}
//                                     alt="red_black_shoe_hero"
//                                 />
//                                 <div className="row mt-4">
//                                     <div className="col-3">
//                                         <div>
//                                             <img
//                                                 onClick={() => setChange(1)}
//                                                 className="w-100 pointer"
//                                                 src={black_shoe_hero}
//                                                 alt="black_shoe_hero"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-3">
//                                         <div>
//                                             <img
//                                                 onClick={() => setChange(2)}
//                                                 className="w-100 pointer"
//                                                 src={shoe}
//                                                 alt="shoe"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-3">
//                                         <div>
//                                             <img
//                                                 onClick={() => setChange(3)}
//                                                 className="w-100 pointer"
//                                                 src={gray_shoe_hero}
//                                                 alt="gray_shoe_hero"
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="col-3">
//                                         <div>
//                                             <img
//                                                 onClick={() => setChange(4)}
//                                                 className="w-100 pointer"
//                                                 src={red_black_shoe_hero}
//                                                 alt="red_black_shoe_hero"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 mt-4 mt-lg-0">
//                             <div className="ms-lg-4">
//                                 <h1 className=" ff_poppins fw-semibold fs_xl text-black m-0">
//                                     Waheguru PG
//                                 </h1>
//                                 <div className="d-flex mt-3 align-items-center">

//                                     <p className="m-0 ms-2 ff_poppins fw-normal fs_md text_gray">
//                                         PG for Boys
//                                     </p>
//                                 </div>

//                                 <div className="d-flex mt-3 align-items-center">
//                                     <img src={stars_5} alt="stars_5" />
//                                     <p className="m-0 ms-2 ff_poppins fw-normal fs_md text_gray">
//                                         ( 5 Customer Review )
//                                     </p>
//                                 </div>
//                                 <p className="m-0 mt-4 ff_poppins fw-normal fs_md opacity-75">
//                                     Address-Near shri krishan pranami mandir tosham (bhiwani) 127040

//                                 </p>
//                                 <p className="m-0 mt-4 ff_poppins fw-normal fs_md opacity-75">
//                                     dgdsfhesbjmhfbhzfnefhdbncsdsjm fhewkuj

//                                 </p>

//                                 <div className="mt-lg-4 d-flex gap-3 align-items-center">
//                                     <p className="m-0 ff_poppins fw_500">Sharing: </p>
//                                     <div className="border_qty d-flex gap-3 align-items-center">
//                                         <button
//                                             onClick={setOne}
//                                             className="btn m-0 ff_josefin fw-normal fs_md border-0"
//                                         >
//                                             -
//                                         </button>
//                                         <p className="m-0 ff_josefin fw-normal fs_md">{inc}</p>
//                                         <button
//                                             onClick={() => setInc(inc + 1)}
//                                             className="btn m-0 ff_josefin fw-normal fs_md border-0"
//                                         >
//                                             +
//                                         </button>
//                                     </div>

//                                 </div>
//                                 <div className="mt-lg-4 d-flex gap-3 align-items-center">
//                                     <button className="ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
//                                         Daily
//                                     </button>
//                                     <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
//                                         Monthly
//                                     </button>
//                                 </div>
//                                 <div className="mt-lg-4 d-flex gap-3 align-items-center">
//                                     <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
//                                         Book now
//                                     </button>
//                                     <button className="btn ff_poppins butn1 fw_500 fs_md Add_to_Cart px-4 text-white">
//                                         Contact Owner
//                                     </button>
//                                 </div>

//                                 {/* <div className="mt-4 d-flex gap-3 align-items-center">
//                                     <p className="m-0 ff_poppins fw_500">   Time: </p>
//                                     <select
//                                         name="Size"
//                                         className="border_qty arrow px-4 ff_josefin fs_md fw-normal"
//                                     >
//                                         <option value="S">S</option>
//                                         <option value="Sm">Sm</option>
//                                         <option value="Md">Md</option>
//                                         <option value="lg">lg</option>
//                                     </select>
//                                 </div> */}
//                                 {/* <div className="mt-4 d-flex gap-2 align-items-center">
//                                     <p className="m-0 ff_poppins fw_500">Color: </p>
//                                     <div className="clr_border pointer">
//                                         <div className="bg_red"></div>
//                                     </div>
//                                     <div className="clr_border pointer">
//                                         <div className="bg_green"></div>
//                                     </div>
//                                     <div className="clr_border pointer">
//                                         <div className="bg_blackk"></div>
//                                     </div>
//                                     <div className="clr_border pointer">
//                                         <div className="bg_gryy"></div>
//                                     </div>
//                                 </div> */}
//                                 <div className="mt-4 d-flex align-items-center gap-5">
//                                     <div className="d-flex align-items-center gap-2 pointer">
//                                         <img src={Compare} alt="Compare" />
//                                         <p className="m-0 ff_poppins fs_xsm fw-light">Compare</p>
//                                     </div>
//                                     <div className="d-flex align-items-center gap-2 pointer">
//                                         <img src={Wishlist} alt="Wishlist" />
//                                         <p className="m-0 ff_poppins fs_xsm fw-light">Wishlist</p>
//                                     </div>
//                                 </div>
//                                 <hr className=" w-75 mt-4" />
//                                 <div className="d-flex align-items-center gap-4">
//                                     <a href="/">
//                                         <img src={share} alt="share" />
//                                     </a>
//                                     <a href="/">
//                                         <img src={fb} alt="fb" />
//                                     </a>
//                                     <a href="/">
//                                         <img src={twit} alt="twit" />
//                                     </a>
//                                     <a href="/">
//                                         <img src={pinterest} alt="pinterest" />
//                                     </a>
//                                     <a href="/">
//                                         <img src={G} alt="G" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Header;
import React, { useState } from "react";
import "./PGDetailsPage.css";
import { Carousel } from "react-carousel-minimal";

import pg1 from "./PG/pic2.png";
import pg2 from "./PG/pic3.png";
import pg3 from "./PG/pic4.png";
import pg4 from "./PG/pic5.png";
import pg5 from "./PG/pic6.png";
import pg6 from "./PG/pic7.png";

// const PGDetailsPage = () => {
//     // Demo data
//     const sliderImages = [
//         pg1,
//         pg2,
//         pg3,
//         pg4,
//         pg5,
//         pg6,
//     ];
function App() {
  const data = [
    {
      image: pg1,
    },
    {
      image: pg2,
    },
    {
      image: pg3,
    },
    {
      image: pg4,
    },
    {
      image: pg5,
    },
    {
      image: pg6,
    },
  ];

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="container">
      <div className="pg-details-container">
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "0 20px",
              }}
            >
              <Carousel
                data={data}
                // time={10}
                width="700px"
                height="500px"
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="black"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  maxWidth: "700px",
                  maxHeight: "500px",
                  margin: "20px 40px 100px 40px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pg-description">
          <h2 className="pg-name">PG Name</h2>
          <div className="pg-info">
            <p>Sharing: Shared Room</p>
            <p>Location: XYZ, City</p>
            <p>Price: $500 per month</p>
            <p>Ratings: 4.5</p>
          </div>
          <div className="booking-buttons">
            <button className="booking-button">Book Daily</button>
            <button className="booking-button">Book Monthly</button>
          </div>
        </div>
      </div>
      <div className="pg-description-text mt-5">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          consectetur luctus rutrum. Nulla facilisi. Aenean nec purus et nisl
          malesuada dignissim. Mauris a sem vitae eros elementum faucibus.
        </p>
      </div>
    </div>
  );
}

export default App;
