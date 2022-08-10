import cls from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';
import { tuple } from 'utils/type';
import style from './style.module.scss';

const ButtonTypes = tuple('button', 'reset', 'submit');
type ButtonType = typeof ButtonTypes[number];

const ButtonVariants = tuple('primary', 'outline', 'text');
type ButtonVariant = typeof ButtonVariants[number];

const ColorVariants = tuple('primary', 'secondary', 'red');
type ColorVariant = typeof ColorVariants[number];

type propTypes = {
  children: ReactNode;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
  color?: ColorVariant;
};

const Button = ({ children, type, onClick, disabled, className, variant, color }: propTypes) => {
  return (
    <button
      className={cls(
        style.button,
        { [style.outline]: variant === 'outline' },
        { [style.text]: variant === 'text' },
        { [style.secondary_color]: color === 'secondary' },
        className
      )}
      // style={{ backgroundColor: `${color}` }}
      type={type}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
  className: '',
  variant: 'primary',
  color: 'wheat'
};

export default Button;
