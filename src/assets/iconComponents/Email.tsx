import * as React from 'react';
import { SVGProps } from 'react';

const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M22 6a2.006 2.006 0 0 0-2-2H4a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2Zm-2 0-8 5-8-5Zm0 12H4V8l8 5 8-5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEmail;
