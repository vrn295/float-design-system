import * as React from 'react';
import { SVGProps } from 'react';

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M16 9v10H8V9Zm-1.5-6h-5l-1 1H5v2h14V4h-3.5ZM18 7H6v12a2.006 2.006 0 0 0 2 2h8a2.006 2.006 0 0 0 2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDelete;
