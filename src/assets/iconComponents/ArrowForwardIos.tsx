import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowForwardIos = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M24 24H0V0h24Z" fill="none" opacity={0.87} />
    <path
      data-name="Vector"
      d="m6.49 20.13 1.77 1.77 9.9-9.9-9.9-9.9-1.77 1.77L14.62 12l-8.13 8.13Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowForwardIos;
