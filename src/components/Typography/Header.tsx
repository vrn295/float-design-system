import { ReactNode } from 'react';
import style from './style.module.scss';

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => <div className={style.header}>{children}</div>;

export default Header;
