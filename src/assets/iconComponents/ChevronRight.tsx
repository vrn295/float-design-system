import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronRight;
