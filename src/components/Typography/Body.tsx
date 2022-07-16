import cls from 'classnames';
import { ReactNode } from 'react';
import style from './style.module.scss';

type Props = { children: ReactNode; level?: 1 | 2 };

const Body = ({ children, level }: Props) => (
  <div className={cls({ [style.body_1]: level === 1 }, { [style.body_2]: level === 2 })}>
    {children}
  </div>
);

Body.defaultProps = {
  level: 1
};

export default Body;
