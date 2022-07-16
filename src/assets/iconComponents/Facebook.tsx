import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M24 12a10 10 0 1 0-12 9.8V15h-2v-3h2V9.5A3.5 3.5 0 0 1 15.5 6H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v6.95A10 10 0 0 0 24 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFacebook;
