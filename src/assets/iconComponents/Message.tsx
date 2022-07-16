import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M4 4h16v12H5.17L4 17.17Zm0-2a2 2 0 0 0-1.99 2L2 22l4-4h14a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2Zm2 10h12v2H6Zm0-3h12v2H6Zm0-3h12v2H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMessage;
