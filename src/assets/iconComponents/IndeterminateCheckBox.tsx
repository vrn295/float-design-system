import * as React from 'react';
import { SVGProps } from 'react';

const SvgIndeterminateCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M19 3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2V5a2.006 2.006 0 0 0-2-2Zm0 16H5V5h14ZM7 11h10v2H7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIndeterminateCheckBox;
