import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronLeft;
