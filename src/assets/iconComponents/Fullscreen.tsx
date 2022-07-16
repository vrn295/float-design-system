import * as React from 'react';
import { SVGProps } from 'react';

const SvgFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M7 14H5v5h5v-2H7Zm-2-4h2V7h3V5H5Zm12 7h-3v2h5v-5h-2ZM14 5v2h3v3h2V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFullscreen;
