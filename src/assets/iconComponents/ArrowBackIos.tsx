import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowBackIos = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" opacity={0.87} />
    <path
      data-name="Vector"
      d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowBackIos;
