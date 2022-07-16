import * as React from 'react';
import { SVGProps } from 'react';

const SvgExpandLess = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgExpandLess;
