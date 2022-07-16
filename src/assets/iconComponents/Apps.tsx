import * as React from 'react';
import { SVGProps } from 'react';

const SvgApps = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M4 8h4V4H4Zm6 12h4v-4h-4Zm-6 0h4v-4H4Zm0-6h4v-4H4Zm6 0h4v-4h-4Zm6-10v4h4V4Zm-6 4h4V4h-4Zm6 6h4v-4h-4Zm0 6h4v-4h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgApps;
