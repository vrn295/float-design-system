import * as React from 'react';
import { SVGProps } from 'react';

const SvgDomainVerification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <g data-name="Group" fill="currentColor">
      <path data-name="Vector" d="m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54Z" />
      <path
        data-name="Vector"
        d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 14H5V8h14Z"
      />
    </g>
  </svg>
);

export default SvgDomainVerification;
