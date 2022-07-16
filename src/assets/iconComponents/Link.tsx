import * as React from 'react';
import { SVGProps } from 'react';

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M17 7h-4v2h4a3 3 0 0 1 0 6h-4v2h4a5 5 0 0 0 0-10Zm-6 8H7a3 3 0 0 1 0-6h4V7H7a5 5 0 0 0 0 10h4Zm-3-4h8v2H8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLink;
