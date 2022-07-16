import * as React from 'react';
import { SVGProps } from 'react';

const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M18.4 10.6a10.472 10.472 0 0 0-16.86 4.62L3.9 16a7.971 7.971 0 0 1 12.72-3.62L13 16h9V7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRedo;
