import { ReactChild } from 'react';
import { tuple } from 'utils/type';
import style from './style.module.scss';

const TooltipDirectionsGroup = tuple('top', 'bottom', 'left', 'right');
type TooltipDirections = typeof TooltipDirectionsGroup[number];
const TooltipAlignGroup = tuple('center', 'end', 'start');
type TooltipAlign = typeof TooltipAlignGroup[number];

type propTypes = {
  content: string;
  direction?: TooltipDirections;
  align?: TooltipAlign;
  children: ReactChild;
  className?: string;
};

const Tooltip = ({ content, direction, align, children, className }: propTypes) => {
  return (
    <div
      className={`${className} ${style.tooltip} ${style[`tooltip_${direction}`]} ${
        style[`tooltip_${direction}_${align}`]
      }`}
      data-title={content}>
      {children}
    </div>
  );
};

Tooltip.defaultProps = {
  direction: 'bottom',
  align: 'center',
  className: ''
};

export default Tooltip;
