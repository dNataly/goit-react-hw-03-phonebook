import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          className={s.filterInput}
          type="text"
          name="filter"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
