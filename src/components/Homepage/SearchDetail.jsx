import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

import search from "./images/Search_logo.svg";

function SearchDetail() {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/`);
      window.scrollTo(0, 0);
    } else {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };
  return (
    <section>
      <div className="container py-4 py-sm-6 d-flex justify-content-center">
        <div className=" d-flex detail_box col-xl-10">
          <div className="row justify-content-between  align-items-center text-center ">
            <form className="searchBox" onSubmit={searchSubmitHandler}>
              <input
                type="text"
                placeholder="find your PG ..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              <div className='"ps-sm-5 ps-lg-0 col-sm-5 col-lg-3  text-center'>
                <input
                  className="d-inline-block butn1 ff_space fw_700 fs_sm text-nowrap"
                  type="submit"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchDetail;
