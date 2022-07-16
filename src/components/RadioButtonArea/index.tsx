import cls from 'classnames';
import { useState } from 'react';
import style from './style.module.scss';
import Radio from '../RadioButton/RadioButton';

type propTypes = {
  disabled?: boolean;
  className?: string;
  label: string;
  description: string;
  handleClick?: () => void | null;
  checked?: boolean;
};

const RadioButtonArea = ({
  disabled,
  className,
  label,
  checked,
  handleClick,
  description
}: propTypes) => {
  const [isChecked, setisChecked] = useState(checked || false);

  const handleChange = () => {
    if (handleClick) {
      handleClick();
    } else {
      setisChecked((prev) => !prev);
    }
  };
  return (
    <label
      htmlFor="radio_id"
      className={cls(style.textarea, className, { [style.textarea_selected]: isChecked })}>
      <Radio disabled={disabled} isChecked={isChecked} handleChange={handleChange} />
      <h2>{label}</h2>
      <p>{description}</p>
    </label>
  );
};

RadioButtonArea.defaultProps = {
  disabled: false,
  className: '',
  checked: false,
  handleClick: null
};

export default RadioButtonArea;
