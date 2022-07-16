import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheck;
