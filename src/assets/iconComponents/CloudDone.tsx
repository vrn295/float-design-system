import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudDone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M19.35 10.04a7.492 7.492 0 0 0-14-2A6 6 0 0 0 6 20h13a4.986 4.986 0 0 0 .35-9.96ZM19 18H6a4 4 0 0 1-.44-7.97l1.07-.11.5-.95a5.487 5.487 0 0 1 10.26 1.46l.3 1.5 1.53.11A2.983 2.983 0 0 1 19 18Zm-9-3.82-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloudDone;
