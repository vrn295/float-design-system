import * as React from 'react';
import { SVGProps } from 'react';

const SvgPushPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <g data-name="Group">
      <path
        data-name="Vector"
        d="M14 4v5a4.985 4.985 0 0 0 1 3H9a4.943 4.943 0 0 0 1-3V4Zm3-2H7a1 1 0 0 0 0 2h1v5a3 3 0 0 1-3 3v2h5.97v7l1 1 1-1v-7H19v-2a3 3 0 0 1-3-3V4h1a1 1 0 0 0 0-2Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgPushPin;
