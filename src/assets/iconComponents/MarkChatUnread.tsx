import * as React from 'react';
import { SVGProps } from 'react';

const SvgMarkChatUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M22 6.98V16a2.006 2.006 0 0 1-2 2H6l-4 4V4a2.006 2.006 0 0 1 2-2h10.1a5.468 5.468 0 0 0-.1 1 5.468 5.468 0 0 0 .1 1H4v12h16V7.9a4.952 4.952 0 0 0 2-.92ZM16 3a3 3 0 1 0 3-3 3 3 0 0 0-3 3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMarkChatUnread;
