import * as React from 'react';
import { SVGProps } from 'react';

const SvgNorthEast = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path data-name="Vector" d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5Z" fill="currentColor" />
  </svg>
);

export default SvgNorthEast;
