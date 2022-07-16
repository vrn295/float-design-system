import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocationOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7ZM7 9a5 5 0 0 1 10 0c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9Z"
      fill="currentColor"
    />
    <path
      data-name="Vector"
      d="M14.5 9A2.5 2.5 0 1 1 12 6.5 2.5 2.5 0 0 1 14.5 9Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocationOn;
