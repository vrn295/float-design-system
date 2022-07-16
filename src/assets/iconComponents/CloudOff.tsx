import * as React from 'react';
import { SVGProps } from 'react';

const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M24 15a4.976 4.976 0 0 0-4.65-4.96A7.49 7.49 0 0 0 12 4a7.393 7.393 0 0 0-3.65.97l1.49 1.49A5.4 5.4 0 0 1 12 6a5.5 5.5 0 0 1 5.5 5.5v.5H19a3 3 0 0 1 1.79 5.4l1.41 1.41A4.967 4.967 0 0 0 24 15ZM4.41 3.86 3 5.27l2.77 2.77h-.42A6 6 0 0 0 6 20h11.73l2 2 1.41-1.41ZM6 18a4 4 0 1 1 0-8h1.73l8 8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCloudOff;
