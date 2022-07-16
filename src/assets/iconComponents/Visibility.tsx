import * as React from 'react';
import { SVGProps } from 'react';

const SvgVisibility = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.822 9.822 0 0 1-17.64 0A9.77 9.77 0 0 1 12 6Zm0-2a11.827 11.827 0 0 0-11 7.5 11.817 11.817 0 0 0 22 0A11.827 11.827 0 0 0 12 4Zm0 5a2.5 2.5 0 1 1-2.5 2.5A2.5 2.5 0 0 1 12 9Zm0-2a4.5 4.5 0 1 0 4.5 4.5A4.507 4.507 0 0 0 12 7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVisibility;
