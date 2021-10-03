import React from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { X } from 'react-feather';
import './style.scss';

const Field = ({
  changeValue,
  value,
  placeholder,
  name,
  clearInput,
  reinitializeData,
  ...props
}) => {
  const handleChange = (event) => {
    changeValue(event.target.value, name);
  };
  const hancleClickToReinitialize = () => {
    clearInput();
    reinitializeData();
  };

  return (
    <div className="input">
      <input
        className="input__field"
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      {value !== '' && <X onClick={hancleClickToReinitialize} />}
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
  clearInput: PropTypes.func.isRequired,
  reinitializeData: PropTypes.func.isRequired,

};

export default Field;
