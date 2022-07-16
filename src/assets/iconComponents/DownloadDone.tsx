import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownloadDone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M5 18h14v2H5Zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDownloadDone;
