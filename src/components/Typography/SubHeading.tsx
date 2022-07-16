import cls from 'classnames';
import { ReactNode } from 'react';
import style from './style.module.scss';

type Props = { children: ReactNode; level?: 1 | 2 };

const SubHeading = ({ children, level }: Props) => (
  <div
    className={cls({ [style.sub_heading_1]: level === 1 }, { [style.sub_heading_2]: level === 2 })}>
    {children}
  </div>
);

SubHeading.defaultProps = {
  level: 1
};

export default SubHeading;
