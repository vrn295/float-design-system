/* eslint-disable no-nested-ternary */
import SvgCheck from 'assets/iconComponents/Check';
import Close from 'assets/iconComponents/Close';
import SvgErrorOutline from 'assets/iconComponents/ErrorOutline';
import SvgInfo from 'assets/iconComponents/Info';
import SvgWarningAmber from 'assets/iconComponents/WarningAmber';
import cls from 'classnames';
import { useState } from 'react';
import { tuple } from 'utils/type';
import style from './style.module.scss';

const ToastTypeGroup = tuple('success', 'error', 'info', 'warning');
type ToastType = typeof ToastTypeGroup[number];
const ToastDirectionGroup = tuple('top-left', 'top-right', 'bottom-left', 'bottom-right');
type ToastDirection = typeof ToastDirectionGroup[number];
type propTypes = {
  className?: string;
  text: string;
  type?: ToastType;
  direction?: ToastDirection;
  delay?: number;
};

export const Toast = ({ className, text, type, direction, delay }: propTypes) => {
  const [isClose, setisClose] = useState(false);

  const handleToastClose = () => {
    setisClose(true);
  };

  return (
    <div
      style={{ animationDuration: `${isClose ? 1.5 : delay}s` }}
      className={cls(className, style.toast, {
        [style.toast_success]: type === 'success',
        [style.toast_error]: type === 'error',
        [style.toast_info]: type === 'info',
        [style.toast_warning]: type === 'warning',
        [style.toast_bottom_left]: direction === 'bottom-left',
        [style.toast_bottom_right]: direction === 'bottom-right',
        [style.toast_top_right]: direction === 'top-right',
        [style.toast_top_left]: direction === 'top-left'
      })}>
      <div className={cls(style.toast_main)}>
        <div className={cls(style.toast_icon)}>
          {type === 'success' ? (
            <SvgCheck color="#fff" width={12} height={12} />
          ) : type === 'error' ? (
            <SvgErrorOutline width={26} height={26} />
          ) : type === 'info' ? (
            <SvgInfo width={28} height={28} />
          ) : type === 'warning' ? (
            <SvgWarningAmber width={26} height={26} />
          ) : (
            <SvgInfo color="#f8f9fa" width={28} height={28} />
          )}
        </div>
        <span className={cls(style.toast_content)}>{text}</span>
      </div>
      <button className={cls(style.toast_close)} onClick={handleToastClose}>
        <Close color="inherit" width={28} height={28} />
      </button>
    </div>
  );
};

Toast.defaultProps = {
  className: '',
  type: 'default',
  direction: 'bottom-right',
  delay: 5
};
