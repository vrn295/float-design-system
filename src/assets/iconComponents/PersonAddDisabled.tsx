import * as React from 'react';
import { SVGProps } from 'react';

const SvgPersonAddDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M15 6a2 2 0 0 1 .33 3.97l-2.31-2.31A2.018 2.018 0 0 1 15 6Zm0-2a4 4 0 0 0-4 4 4.363 4.363 0 0 0 .05.52l3.43 3.43A4.363 4.363 0 0 0 15 12a4 4 0 0 0 0-8Zm1.69 10.16L22.53 20H23v-2c0-2.14-3.56-3.5-6.31-3.84Zm-3.68 1.97L14.88 18H9c.08-.24.88-1.01 2.91-1.57l1.1-.3ZM1.41 1.71 0 3.12l4 4V10H1v2h3v3h2v-3h2.88l2.51 2.51C9.19 15.11 7 16.3 7 18v2h9.88l4 4 1.41-1.41ZM6 10v-.88l.88.88Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPersonAddDisabled;
