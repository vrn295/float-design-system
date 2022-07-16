import * as React from 'react';
import { SVGProps } from 'react';

const SvgImportExport = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M9 3 5 6.99h3V14h2V6.99h3Zm7 14.01V10h-2v7.01h-3L15 21l4-3.99Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgImportExport;
