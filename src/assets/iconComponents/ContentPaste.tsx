import * as React from 'react';
import { SVGProps } from 'react';

const SvgContentPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M19 2h-4.18a2.988 2.988 0 0 0-5.64 0H5a2.006 2.006 0 0 0-2 2v16a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2Zm-7 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm7 18H5V4h2v3h10V4h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgContentPaste;
