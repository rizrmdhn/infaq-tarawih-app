import React from "react";
import PropTypes from "prop-types";
import { FaListUl } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import "./styles/styles.css";

function MobileNavigation({}) {
  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu">
        <div className="mobile-menu-item">
          <div className="item-list-menu">
            <FaListUl size={25} /> <br />
            List Item
          </div>
          <div className="menu-app">
            <BsThreeDots size={25} /> <br />
            Menu
          </div>
        </div>
      </div>
    </div>
  );
}

MobileNavigation.propTypes = {};

export default MobileNavigation;
