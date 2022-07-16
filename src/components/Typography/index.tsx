import { ReactNode } from 'react';
import Body from './Body';
import Header from './Header';
import Heading from './Heading';
import SubHeading from './SubHeading';

type Props = { children: ReactNode };

const Typograpgy = ({ children }: Props) => {
  return <div>{children}</div>;
};

Typograpgy.Body = Body;
Typograpgy.Header = Header;
Typograpgy.Heading = Heading;
Typograpgy.SubHeading = SubHeading;

export default Typograpgy;
