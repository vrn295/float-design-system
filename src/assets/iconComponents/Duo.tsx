import * as React from 'react';
import { SVGProps } from 'react';

const SvgDuo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M20 2h-8A10.117 10.117 0 0 0 2 12.28 9.909 9.909 0 0 0 11.72 22 10.086 10.086 0 0 0 22 12V4a2.006 2.006 0 0 0-2-2Zm-3 13-3-2v2H7V9h7v2l3-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDuo;
