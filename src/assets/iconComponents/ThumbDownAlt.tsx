import * as React from 'react';
import { SVGProps } from 'react';

const SvgThumbDownAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" opacity={0.87} />
    <path
      data-name="Vector"
      d="M15 3H6a1.987 1.987 0 0 0-1.84 1.22l-3.02 7.05A1.976 1.976 0 0 0 1 12v2a2.006 2.006 0 0 0 2 2h6.31l-.95 4.57-.03.32a1.505 1.505 0 0 0 .44 1.06L9.83 23l6.58-6.59A1.955 1.955 0 0 0 17 15V5a2.006 2.006 0 0 0-2-2Zm0 12-4.34 4.34L11.77 14H3v-2l3-7h9Zm4-12h4v12h-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgThumbDownAlt;
