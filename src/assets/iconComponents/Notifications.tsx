import * as React from 'react';
import { SVGProps } from 'react';

const SvgNotifications = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 22a2.006 2.006 0 0 0 2-2h-4a2.006 2.006 0 0 0 2 2Zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1Zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgNotifications;
