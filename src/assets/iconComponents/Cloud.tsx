import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 6a5.5 5.5 0 0 1 5.39 4.43l.3 1.5 1.53.11A2.983 2.983 0 0 1 19 18H6a4 4 0 0 1-.44-7.97l1.07-.11.5-.95A5.469 5.469 0 0 1 12 6Zm0-2a7.5 7.5 0 0 0-6.65 4.04A6 6 0 0 0 6 20h13a4.986 4.986 0 0 0 .35-9.96A7.49 7.49 0 0 0 12 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloud;
