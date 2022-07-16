import * as React from 'react';
import { SVGProps } from 'react';

const SvgDrafts = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M21.99 8a1.982 1.982 0 0 0-.94-1.7L12 1 2.95 6.3A1.991 1.991 0 0 0 2 8v10a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2Zm-2 0v.01L12 13 4 8l8-4.68ZM4 18v-7.66l8 5.02 7.99-4.99L20 18Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDrafts;
