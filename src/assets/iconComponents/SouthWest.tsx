import * as React from 'react';
import { SVGProps } from 'react';

const SvgSouthWest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSouthWest;
