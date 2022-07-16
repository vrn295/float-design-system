import * as React from 'react';
import { SVGProps } from 'react';

const SvgMarkEmailUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M22 8.98V18a2.006 2.006 0 0 1-2 2H4a2.006 2.006 0 0 1-2-2l.01-12A2 2 0 0 1 4 4h10.1a5.468 5.468 0 0 0-.1 1 5.468 5.468 0 0 0 .1 1H4l8 5 3.67-2.29a4.83 4.83 0 0 0 1.63.98L12 13 4 8v10h16V9.9a4.952 4.952 0 0 0 2-.92ZM16 5a3 3 0 1 0 3-3 3 3 0 0 0-3 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMarkEmailUnread;
