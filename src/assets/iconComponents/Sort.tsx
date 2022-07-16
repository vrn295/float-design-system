import * as React from 'react';
import { SVGProps } from 'react';

const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path data-name="Vector" d="M3 18h6v-2H3ZM3 6v2h18V6Zm0 7h12v-2H3Z" fill="currentColor" />
  </svg>
);

export default SvgSort;
