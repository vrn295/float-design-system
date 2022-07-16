import * as React from 'react';
import { SVGProps } from 'react';

const SvgSwapHoriz = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99ZM21 9l-3.99-4v3H10v2h7.01v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSwapHoriz;
