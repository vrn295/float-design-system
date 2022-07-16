import cls from 'classnames';
import { ReactNode } from 'react';
import style from './style.module.scss';

type Props = {
  children: ReactNode;
  level?: 1 | 2;
};

const Heading = ({ children, level }: Props) => (
  <div className={cls({ [style.heading_1]: level === 1 }, { [style.heading_2]: level === 2 })}>
    {children}
  </div>
);

Heading.defaultProps = {
  level: 1
};

export default Heading;
