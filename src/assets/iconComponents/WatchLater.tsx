import * as React from 'react';
import { SVGProps } from 'react';

const SvgWatchLater = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <g data-name="Group">
      <path
        data-name="Vector"
        d="M12 2a10 10 0 1 0 10 10A10.029 10.029 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.011 8.011 0 0 1-8 8Zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgWatchLater;
