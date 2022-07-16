import cls from 'classnames';
import style from './style.module.scss';

type propTypes = {
  disabled?: boolean;
  isChecked?: boolean;
  handleChange?: () => void;
};

const RadioButton = ({ disabled, isChecked, handleChange }: propTypes) => {
  return (
    <>
      <input
        type="radio"
        id="radio_id"
        className={cls(style.radio_input)}
        disabled={disabled}
        checked={isChecked}
        onChange={handleChange}
      />
      <div className={cls(style.radio_container)} />
    </>
  );
};

RadioButton.defaultProps = {
  disabled: false,
  isChecked: false,
  handleChange: null
};

export default RadioButton;
