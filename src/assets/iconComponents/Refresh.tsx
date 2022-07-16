import * as React from 'react';
import { SVGProps } from 'react';

const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M17.65 6.35A8 8 0 1 0 19.73 14h-2.08A6 6 0 1 1 12 6a5.915 5.915 0 0 1 4.22 1.78L13 11h7V4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRefresh;
