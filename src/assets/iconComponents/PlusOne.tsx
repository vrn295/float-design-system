import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlusOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4Zm4.5-1.92V7.9l2.5-.5V18h2V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPlusOne;
