import * as React from 'react';
import { SVGProps } from 'react';

const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="m9.17 6 2 2H20v10H4V6ZM10 4H4a2 2 0 0 0-1.99 2L2 18a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V8a2.006 2.006 0 0 0-2-2h-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFolder;
