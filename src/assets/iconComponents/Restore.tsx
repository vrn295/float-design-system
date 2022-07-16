import * as React from 'react';
import { SVGProps } from 'react';

const SvgRestore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M13 3a9 9 0 0 0-9 9H1l4 3.99L9 12H6a7.034 7.034 0 1 1 2.06 4.94l-1.42 1.42A9 9 0 1 0 13 3Zm-1 5v5l4.25 2.52.77-1.28-3.52-2.09V8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRestore;
