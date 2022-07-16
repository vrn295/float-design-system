import * as React from 'react';
import { SVGProps } from 'react';

const SvgNorthWest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNorthWest;
