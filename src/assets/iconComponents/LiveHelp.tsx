import * as React from 'react';
import { SVGProps } from 'react';

const SvgLiveHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M19 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4l3 3 3-3h4a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2Zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14Zm-8-3h2v2h-2Zm1-8a2.006 2.006 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-8 0h2a2.006 2.006 0 0 1 2-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLiveHelp;
