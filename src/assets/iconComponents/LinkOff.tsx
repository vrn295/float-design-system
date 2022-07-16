import * as React from 'react';
import { SVGProps } from 'react';

const SvgLinkOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M14.39 11 16 12.61V11ZM17 7h-4v1.9h4a3.1 3.1 0 0 1 1.23 5.94l1.4 1.4A4.992 4.992 0 0 0 17 7ZM2 4.27l3.11 3.11A4.995 4.995 0 0 0 7 17h4v-1.9H7a3.094 3.094 0 0 1-.34-6.17L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4.01 1.41-1.41L3.41 2.86Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLinkOff;
