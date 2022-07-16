import * as React from 'react';
import { SVGProps } from 'react';

const SvgMailOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M20 4H4a2 2 0 0 0-1.99 2L2 18a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2Zm0 14H4V8l8 5 8-5Zm-8-7L4 6h16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMailOutline;
