import * as React from 'react';
import { SVGProps } from 'react';

const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <g fill="none">
      <path d="M0 0h24v24H0Z" />
      <path data-name="Vector" d="M0 0h24v24H0Z" />
    </g>
    <g data-name="Group">
      <path
        data-name="Vector"
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgStar;
