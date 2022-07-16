import * as React from 'react';
import { SVGProps } from 'react';

const SvgUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M9 16h6v-6h4l-7-7-7 7h4Zm3-10.17L14.17 8H13v6h-2V8H9.83ZM5 18h14v2H5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUpload;
