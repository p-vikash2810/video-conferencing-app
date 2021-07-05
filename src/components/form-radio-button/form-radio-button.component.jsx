import React from "react";
import "./form-radio-button.styles.scss";

const FormRadioButton = ({ handleChange, label, subLabel, ...otherProps }) => {
  return (
    <div className="radio-button-sec">
      <input
        type="radio"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      <label htmlFor="" className="form-input-label">
        {label}
        {subLabel ? (
          <span className="sub-label">{` - ${subLabel}`}</span>
        ) : null}
      </label>
    </div>
  );
};

export default FormRadioButton;
