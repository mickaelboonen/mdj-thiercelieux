import React from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({
  changeValue,
  value,
  placeholder,
  name,
  ...props
}) => {
  const handleChange = (event) => {
    changeValue(event.target.value, name);
  };

  return (
    <div className="input">
      {/* {location.pathname !== '/' && (
      <label
        htmlFor={placeholder}
        className="input__label"
      >
        {placeholder}
      </label>
      )} */}
      <input
        className="input__field"
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

Field.propTypes = {
  // STRINGS
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  // FUNCTIONS
  changeValue: PropTypes.func.isRequired,

};

export default Field;
