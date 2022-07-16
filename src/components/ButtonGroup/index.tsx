import cls from 'classnames';
import { ReactNode } from 'react';
import { tuple } from 'utils/type';
import style from './style.module.scss';

const ButtonGroupOrientation = tuple('horizontal', 'vertical');
type ButtonOrientation = typeof ButtonGroupOrientation[number];

type propTypes = {
  children: ReactNode;
  orientation?: ButtonOrientation;
  className?: string;
};

const ButtonGroup = ({ orientation, className, children }: propTypes) => {
  return (
    <div
      className={cls(
        style['button-group'],
        { [style.vertical]: orientation === 'vertical' },
        className
      )}>
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  orientation: 'horizontal',
  className: ''
};

export default ButtonGroup;
