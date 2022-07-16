import * as React from 'react';
import { SVGProps } from 'react';

const SvgCreate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75ZM5.92 19H5v-.92l9.06-9.06.92.92ZM20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a1 1 0 0 0 0-1.41Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCreate;
