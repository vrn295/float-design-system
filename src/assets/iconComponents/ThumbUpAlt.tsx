import * as React from 'react';
import { SVGProps } from 'react';

const SvgThumbUpAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" opacity={0.87} />
    <path
      data-name="Vector"
      d="M21 8h-6.31l.95-4.57.03-.32a1.505 1.505 0 0 0-.44-1.06L14.17 1 7.59 7.59A1.955 1.955 0 0 0 7 9v10a2.006 2.006 0 0 0 2 2h9a1.987 1.987 0 0 0 1.84-1.22l3.02-7.05A1.976 1.976 0 0 0 23 12v-2a2.006 2.006 0 0 0-2-2Zm0 4-3 7H9V9l4.34-4.34L12.23 10H21ZM1 9h4v12H1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThumbUpAlt;
