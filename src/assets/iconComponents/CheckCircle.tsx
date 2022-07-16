import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.011 8.011 0 0 1-8 8Zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCheckCircle;
