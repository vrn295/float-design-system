import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoreHoriz = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M6 10a2 2 0 1 0 2 2 2.006 2.006 0 0 0-2-2Zm12 0a2 2 0 1 0 2 2 2.006 2.006 0 0 0-2-2Zm-6 0a2 2 0 1 0 2 2 2.006 2.006 0 0 0-2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMoreHoriz;
