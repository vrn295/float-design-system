import * as React from 'react';
import { SVGProps } from 'react';

const SvgSaveAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M19 12v7H5v-7H3v7a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-7Zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSaveAlt;
