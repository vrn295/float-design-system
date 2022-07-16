import * as React from 'react';
import { SVGProps } from 'react';

const SvgHourglassBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <g data-name="Group">
      <path
        data-name="Vector"
        d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22ZM8 7.5V4h8v3.5l-4 4Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgHourglassBottom;
