import * as React from 'react';
import { SVGProps } from 'react';

const SvgExpandMore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M24 24H0V0h24Z" fill="none" opacity={0.87} />
    <path data-name="Vector" d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6Z" fill="currentColor" />
  </svg>
);

export default SvgExpandMore;
