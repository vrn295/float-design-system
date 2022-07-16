import * as React from 'react';
import { SVGProps } from 'react';

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path data-name="Vector" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6Z" fill="currentColor" />
  </svg>
);

export default SvgAdd;
