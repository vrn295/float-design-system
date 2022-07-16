import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <g data-name="Group 1">
      <g data-name="Group">
        <path
          data-name="Vector"
          d="M3 5h8V3H3a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h8v-2H3Z"
          fill="currentColor"
        />
      </g>
      <path
        data-name="Vector"
        d="m17 7-1.4 1.4 2.6 2.6H8v2h10.2l-2.6 2.6L17 17l5-5Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgLogin;
