import * as React from 'react';
import { SVGProps } from 'react';

const SvgFullscreenExit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M5 16h3v3h2v-5H5Zm3-8H5v2h5V5H8Zm6 11h2v-3h3v-2h-5Zm2-11V5h-2v5h5V8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFullscreenExit;
