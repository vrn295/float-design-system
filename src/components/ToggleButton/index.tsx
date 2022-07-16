import React, { useState } from 'react';
import style from './ToggleButton.module.scss';

type propTypes = {
  checked?: boolean;
  disabled?: boolean;
  handleToggle?: () => void;
};

const ToggleButton = ({ checked, disabled, handleToggle }: propTypes) => {
  const [isChecked, setisChecked] = useState(false);

  const handleChange = () => {
    if (handleToggle) {
      handleToggle();
    } else {
      setisChecked((prev) => !prev);
    }
  };

  return (
    <label className={style.switch} htmlFor="checkbox_label">
      <input
        id="checkbox_label"
        type="checkbox"
        checked={checked || isChecked}
        disabled={disabled}
        onClick={handleChange}
      />
      <span className={style.slider} />
    </label>
  );
};

ToggleButton.defaultProps = {
  checked: false,
  disabled: false,
  handleToggle: null
};

export default ToggleButton;
