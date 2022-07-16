import * as React from 'react';
import { SVGProps } from 'react';

const SvgContentCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M16 1H4a2.006 2.006 0 0 0-2 2v14h2V3h12Zm3 4H8a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h11a2.006 2.006 0 0 0 2-2V7a2.006 2.006 0 0 0-2-2Zm0 16H8V7h11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgContentCopy;
