import * as React from 'react';
import { SVGProps } from 'react';

const SvgRssFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M8.36 17.82a2.18 2.18 0 1 1-2.18-2.18 2.18 2.18 0 0 1 2.18 2.18Z"
      fill="currentColor"
    />
    <path
      data-name="Vector"
      d="M4 4.44v2.83A12.731 12.731 0 0 1 16.73 20h2.83A15.565 15.565 0 0 0 4 4.44Zm0 5.66v2.83A7.076 7.076 0 0 1 11.07 20h2.83A9.9 9.9 0 0 0 4 10.1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRssFeed;
