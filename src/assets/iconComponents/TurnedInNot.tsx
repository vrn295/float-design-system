import * as React from 'react';
import { SVGProps } from 'react';

const SvgTurnedInNot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M17 3H7a2 2 0 0 0-1.99 2L5 21l7-3 7 3V5a2.006 2.006 0 0 0-2-2Zm0 15-5-2.18L7 18V5h10Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTurnedInNot;
