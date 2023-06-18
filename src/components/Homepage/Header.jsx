import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "./images/menu.svg";
import play_btn from "./images/Video_play_btn.svg";
import hero_img from "./images/hero2.jpg";
import { useNavigate } from "react-router-dom";
import "./header.css";
import LoginPage from "../login/LoginPage";
import Navbar from "../Navbar";
import { allPgs } from "./../../api";

function Header() {
  let navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(keyword);

    const response = await allPgs({ city: keyword.trim().toLowerCase() });
    console.log(response);

    navigate("/listedpg", { state: response.data.pgs });
  };
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }

  return (
    <header>
      <section className="container py-5">
        <div className="row flex-column-reverse flex-lg-row align-items-center">
          <div className="col-lg-6">
            <h1 className="ff_space fw_500 fs_xxl heading1">
              Find Your Second Home !
            </h1>
            <p className="ff_space fw_400 fs_sm blk_clr opacity-75 mb-4 mb-sm-5 col-10">
              Searching for the perfect PG? Look no further - you've landed in
              the right spot.
            </p>
            <div className="d-flex align-items-center">
              <form
                className="searchBox gap-3 ms-0"
                onSubmit={searchSubmitHandler}
              >
                <input
                  className="main-search"
                  type="text"
                  placeholder="Enter city ..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <div className='"ps-sm-2 col-lg-5  text-center ms-0'>
                  <input
                    className="d-inline-block searchBtn ff_space fw_700 fs_sm text-nowrap ms-0 w-100"
                    type="submit"
                    value="Search"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="w-100 border-hero" src={hero_img} alt="hero_img" />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
