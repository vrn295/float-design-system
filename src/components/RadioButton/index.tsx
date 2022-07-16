import cls from 'classnames';
import { useState } from 'react';
import Radio from './RadioButton';
// import style from './style.module.scss';

type propTypes = {
  // children: ReactNode;
  // onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  className?: string;
  label: string;
  checked?: boolean;
  handleClick?: () => void | null;
};

const RadioButton = ({ disabled, className, label, checked, handleClick }: propTypes) => {
  const [isChecked, setisChecked] = useState(checked || false);

  const handleChange = () => {
    if (handleClick) {
      handleClick();
    } else {
      setisChecked((prev) => !prev);
    }
  };
  return (
    <label htmlFor="radio_id" className={cls(className)}>
      <Radio disabled={disabled} isChecked={isChecked} handleChange={handleChange} />
      <span>{label}</span>
    </label>
  );
};

RadioButton.defaultProps = {
  disabled: false,
  className: '',
  checked: false,
  handleClick: null
};

export default RadioButton;
