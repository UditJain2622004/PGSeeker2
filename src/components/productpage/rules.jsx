import React from "react";
import "./Amenities.css"; // Import your CSS file for styling
import smokingIcon from "./images/no-smoking.png";
import guestsIcon from "./images/guests.png";
import loudMusicIcon from "./images/music.png";
import alcohol from "./images/no-alcohol.png";
import gate from "./images/time.png";
import notice from "./images/calendar.png";
import security from "./images/get-money.png";
// Import other rule icons

const rulesData = [
  { name: "smoking", icon: smokingIcon },
  { name: "guests", icon: guestsIcon },
  { name: "loudMusicAllowed", icon: loudMusicIcon },
  { name: "alcoholAllowed", icon: alcohol },
  // Add other rules with their names and icons
];

// Sample data for additional specifications
const gateTime = [{ value: "10:00 PM" }];
const securityNotice = [
  { amount: "10000" },
  // Add other additional specifications
];
const noticePeriod = [{ time: "10" }];

const RulesSection = ({ rules, subRules }) => {
  const isallowed = (rule) => rules.includes(rule);
  return (
    <div className="rules-container">
      <h3 className="ff_space fs_xl amenity-heading">Rules</h3>
      <div className="amenities-list">
        {rulesData.map((rule, i) => (
          <div key={i} className="amenity">
            <img className="amenity-icon" src={rule.icon} alt={rule.name} />
            <div>
              <span className="amenity-label">{rule.name}</span>
              <p
                className={`availability ${
                  isallowed(rule.name) ? "available" : "not-available"
                }`}
              >
                {isallowed(rule.name) ? "Allowed" : "Not Allowed"}
              </p>
            </div>
          </div>
        ))}
        {subRules.gateClosingTime && (
          <div className="amenity">
            <img className="amenity-icon" src={gate} alt={gate} />
            <div className="">
              <span className="amenity-label">Gate-Closing Time</span>
              {gateTime.map((specification, i) => (
                <li key={i} className="availability">
                  {subRules.gateClosingTime}
                </li>
              ))}
            </div>
          </div>
        )}

        <div className="amenity">
          <img className="amenity-icon" src={notice} alt={notice} />
          <div className="d-flex flex-column">
            <span className="amenity-label">Notice-Period</span>
            {noticePeriod.map((notice, i) => (
              <li key={i} className="availability">
                {subRules.noticePeriodDays + " days"}
              </li>
            ))}
          </div>
        </div>
        <div className="amenity">
          <img className="amenity-icon" src={security} alt={security} />
          <div className="d-flex flex-column">
            <span className="amenity-label">Security-Deposit</span>
            {securityNotice.map((security, i) => (
              <li key={i} className="availability">
                {"Rs. " + subRules.securityDeposit}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="amenities-list"></div>
      </div>
    </div>
  );
};

export default RulesSection;
