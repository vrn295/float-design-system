import * as React from 'react';
import { SVGProps } from 'react';

const SvgCall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M6.54 5a12.312 12.312 0 0 0 .45 2.59l-1.2 1.2A14.825 14.825 0 0 1 5.03 5Zm9.86 12.02a12.753 12.753 0 0 0 2.6.45v1.49a15.426 15.426 0 0 1-3.8-.75l1.2-1.19ZM7.5 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.49a1 1 0 0 0-1-1 11.407 11.407 0 0 1-3.57-.57.839.839 0 0 0-.31-.05 1.024 1.024 0 0 0-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCall;
