import * as React from 'react';
import { SVGProps } from 'react';

const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M17 6H7a6 6 0 0 0 0 12h10a6 6 0 0 0 0-12Zm0 10H7a4 4 0 0 1 0-8h10a4 4 0 0 1 0 8ZM7 9a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgToggleOff;
