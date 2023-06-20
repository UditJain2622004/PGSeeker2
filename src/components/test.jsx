<div className="row parts part2">
  {/* <div className="form-group"> */}
  <div class="col-6 col-md-4">
    {/* <label htmlFor="description">Description:</label> */}
  </div>
  <div class="col-12 col-md-8">
    {/* <textarea
              // rows="2"
              // cols="30"
              className=""
              id="description"
              name="description"
              value={pgDetails.description}
              onChange={handlePGDetailsChange}
            /> */}
  </div>
  {/* </div> */}
</div>;

<section className="sharing parts part4">
  <h2 className="input-heading">Sharing Options</h2>
  {sharingOptions.map((option, index) => (
    <div key={index} className="sharingoption">
      <label>
        Occupancy:
        <input
          type="number"
          value={option.occupancy}
          onChange={(e) =>
            handleSharingOptionChange(index, "occupancy", e.target.value)
          }
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={option.price}
          onChange={(e) =>
            handleSharingOptionChange(index, "price", e.target.value)
          }
        />
      </label>
      <label>
        AC:
        <input
          type="checkbox"
          checked={option.ac}
          onChange={(e) =>
            handleSharingOptionChange(index, "ac", e.target.checked)
          }
        />
      </label>
      <button
        className="btn btn-outline-danger"
        type="button"
        onClick={() => handleRemoveSharingOption(index)}
      >
        Remove
      </button>
    </div>
  ))}
  <button
    className="btn btn-outline-success p-1 btn-sm "
    type="button"
    onClick={handleAddSharingOption}
  >
    Add Sharing Option
  </button>
</section>;

<div className="row amenities parts part13">
  {/* <div className="form-group"> */}
  <div class="col-6 col-md-4">
    <label htmlFor="pgamenities">
      <p className="input-heading">PG Amenities :</p>
    </label>
  </div>
  <div class="col-12 col-md-8">
    <div className="amenities-row">
      <CheckBoxInput
        fields={amenities2.slice(0, 3)}
        type={pgAmenities}
        handleChange={handlePgAmenitiesChange}
        allowed={false}
      />
    </div>
  </div>
  {/* </div> */}
</div>;

<div className="row amenities parts part14">
  {/* <div className="form-group"> */}
  <div class="col-6 col-md-4">
    <label htmlFor="pgamenities">
      <p className="input-heading"></p>
    </label>
  </div>
  <div class="col-12 col-md-8">
    <div className="amenities-row">
      <CheckBoxInput
        fields={amenities2.slice(4, 7)}
        type={pgAmenities}
        handleChange={handlePgAmenitiesChange}
        allowed={false}
      />
    </div>
  </div>
  {/* </div> */}
</div>;

<>
  <div class="row name parts part1">
    {/* <div className="form-group"> */}
    <div class="col-6 col-md-4">
      <label htmlFor="name">
        <p className="input-heading">Name :</p>
      </label>
    </div>
    <div class="col-12 col-md-8">
      <input
        type="text"
        id="name"
        name="name"
        size="10"
        value={pgDetails.name}
        onChange={handlePGDetailsChange}
      />
    </div>
    {/* </div> */}
  </div>
</>;
{
    "city":"hisar",
    "price":[5000,10000],
    "pgType":["male","mixed"],
    "sharing":["1","2","3"],
    "amenities":["wifi","parking"],
    "rules":["guests"],
    "sort":-1
}
"city":"hisar",
    "price":[5000,10000],
    "pgType":["male","coLiving","female"],
    "sharing":["1","2","3"],
    "amenities":["wifi","parking"],
    "rules":["guests"],
    "sort":-1
{pgs.length === 0 && (
        <div className="d-flex">
          <div className="filersection">
            <Filters />
          </div>
          <div className="error-container">
            <div>
              <p className="no-pg-error">Sorry! No PG available.</p>
            </div>
            <div>
              <p className="home-link">
                Go back to <Link to={"/"}>Home</Link> Page
              </p>
            </div>
          </div>
        </div>
      )}