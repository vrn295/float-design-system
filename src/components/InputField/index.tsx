import { useState } from 'react';
import cls from 'classnames';
import style from './style.module.scss';

type propTypes = {
  value: string | number;
  placeholder?: string;
  label: string;
  name?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: any) => void;
  required?: boolean;
  helperText?: string;
  type?: string;
  className?: string;
};

const InputField = ({
  value,
  placeholder,
  label,
  name,
  onChange,
  required,
  helperText,
  type,
  className
}: propTypes) => {
  const [inputValue, setinputValue] = useState(value);

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    } else {
      setinputValue(e.target.value);
    }
  };

  const handleReset = () => {
    console.log('run');
    setinputValue('');
  };

  return (
    <div className={cls(className, style.container)}>
      <label className={cls({ [style.required_label]: required })} htmlFor={label}>
        {label}
      </label>
      <div className={cls(style.input_container)}>
        <input
          id={label}
          type={type}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          required={required}
        />
        <button className={cls(style.close)} onClick={handleReset}>
          <img src="/close.svg" alt="Close" />
        </button>
      </div>
      <span className={cls(style.helperText)}>{helperText}</span>
    </div>
  );
};

InputField.defaultProps = {
  placeholder: '',
  required: false,
  helperText: '',
  name: '',
  onChange: null,
  type: 'text',
  className: ''
};

export default InputField;
