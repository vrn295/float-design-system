import * as React from 'react';
import { SVGProps } from 'react';

const SvgPrivacyTip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="m12 3.19 7 3.11V11a10.473 10.473 0 0 1-7 9.93A10.473 10.473 0 0 1 5 11V6.3ZM12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5Zm-1 6h2v2h-2Zm0 4h2v6h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrivacyTip;
