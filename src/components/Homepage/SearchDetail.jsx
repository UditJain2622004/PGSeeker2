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

          {/* <div className="ps-sm-5 ps-lg-0 col-sm-6 col-lg-2  text-center">
              <Dropdown>
                <Dropdown.Toggle
                  className="ff_space fw_700 fs_sm blue_clr"
                  variant="success"
                  id="dropdown-basic"
                >
                  Property Type
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">Duplex </Dropdown.Item>
                  <Dropdown.Item href="#">Flat</Dropdown.Item>
                  <Dropdown.Item href="#">Farmhouse</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="ff_space fw_400 fs_sm blk_clr opacity-50 ps-3">
                Duplex
              </p>
            </div> */}
          {/* <div className="col-sm-6 col-lg-2  text-center">
              <Dropdown>
                <Dropdown.Toggle
                  className="ff_space fw_700 fs_sm blue_clr"
                  variant="success"
                  id="dropdown-basic"
                >
                  Max Price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">$10,000 </Dropdown.Item>
                  <Dropdown.Item href="#">$25,000 </Dropdown.Item>
                  <Dropdown.Item href="#">$50,000 </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <p className="ff_space fw_400 fs_sm blk_clr opacity-50 ps-3">
                $10,000
              </p>
            </div> */}
          {/* <div className="ps-sm-5 ps-lg-0 col-sm-6 col-lg-3  text-center">
            <a
              href="#"
              className="d-inline-block butn1 ff_space fw_700 fs_sm text-nowrap"
            >
              <img className="pe-3 pb-1" src={search} alt="search" />
              Search
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default SearchDetail;
