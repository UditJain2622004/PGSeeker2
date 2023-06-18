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
