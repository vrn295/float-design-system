import * as React from 'react';
import { SVGProps } from 'react';

const SvgChatBubbleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M20 2H4a2.006 2.006 0 0 0-2 2v18l4-4h14a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2Zm0 14H6l-2 2V4h16Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChatBubbleOutline;
