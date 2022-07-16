import cls from 'classnames';
import { MouseEventHandler, ReactNode } from 'react';
import { tuple } from 'utils/type';
import style from './style.module.scss';

const ButtonTypes = tuple('button', 'reset', 'submit');
type ButtonType = typeof ButtonTypes[number];

const ButtonVariants = tuple('primary', 'outline', 'text');
type ButtonVariant = typeof ButtonVariants[number];

type propTypes = {
  children: ReactNode;
  type?: ButtonType;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  className?: string;
  variant?: ButtonVariant;
};

const Button = ({ children, type, onClick, disabled, className, variant }: propTypes) => {
  return (
    <button
      className={cls(
        style.button,
        { [style.outline]: variant === 'outline' },
        { [style.text]: variant === 'text' },
        className
      )}
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
  variant: 'primary'
};

export default Button;
