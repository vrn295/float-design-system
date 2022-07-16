import * as React from 'react';
import { SVGProps } from 'react';

const SvgComment = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M21.99 4A2 2 0 0 0 20 2H4a2.006 2.006 0 0 0-2 2v12a2.006 2.006 0 0 0 2 2h14l4 4ZM20 4v13.17L18.83 16H4V4ZM6 12h12v2H6Zm0-3h12v2H6Zm0-3h12v2H6Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComment;
