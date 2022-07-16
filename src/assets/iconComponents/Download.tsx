import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M19 9h-4V3H9v6H5l7 7Zm-8 2V5h2v6h1.17L12 13.17 9.83 11Zm-6 7h14v2H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDownload;
