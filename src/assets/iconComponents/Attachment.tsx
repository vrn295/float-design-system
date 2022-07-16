import * as React from 'react';
import { SVGProps } from 'react';

const SvgAttachment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M18.5 16H7a4 4 0 0 1 0-8h12.5a2.5 2.5 0 0 1 0 5H9a1 1 0 0 1 0-2h9.5V9.5H9a2.5 2.5 0 0 0 0 5h10.5a4 4 0 0 0 0-8H7a5.5 5.5 0 0 0 0 11h11.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAttachment;
