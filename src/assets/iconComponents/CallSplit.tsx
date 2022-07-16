import * as React from 'react';
import { SVGProps } from 'react';

const SvgCallSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4Zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCallSplit;
