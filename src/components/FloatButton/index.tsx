import { MouseEventHandler, ReactNode, useState } from 'react';
import cls from 'classnames';
import style from './style.module.scss';

type Option = {
  icon: string;
  name: string;
  onClick: MouseEventHandler<HTMLElement>;
};

type propTypes =
  | {
      icon?: string;
      onClick?: MouseEventHandler<HTMLElement>;
      className?: string;
      children?: ReactNode;
      variant?: 'normal';
      options?: Option[];
      altIcon?: string;
    }
  | {
      icon?: string;
      onClick?: MouseEventHandler<HTMLElement>;
      className?: string;
      children?: ReactNode;
      variant?: 'expand' | 'expandOptions';
      options: Option[];
      altIcon?: string;
    };

const FloatButton = ({
  icon,
  onClick,
  className,
  children,
  variant,
  options,
  altIcon
}: propTypes) => {
  const [isClicked, setisClicked] = useState(false);

  const toogleClick = () => setisClicked((prevState) => !prevState);

  return (
    <div className={cls(style.main)}>
      <button
        className={cls(style.float_btn, className)}
        onClick={variant === 'normal' ? onClick : toogleClick}>
        {icon && <img className={cls(style.float_btn_img)} src={icon} alt={altIcon} />}
        {children}
      </button>
      {variant === 'expand' && options && (
        <div className={cls({ [style.optionsExpand]: isClicked }, style.options)}>
          {options.map((item: Option) => (
            <button key={item.name} onClick={item.onClick}>
              <img src={item.icon} alt={item.name} />
              {/* <span>{item.name}</span> */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

FloatButton.defaultProps = {
  icon: '/add.svg',
  onClick: () => {},
  className: '',
  children: '',
  variant: 'normal',
  altIcon: ''
};

export default FloatButton;
