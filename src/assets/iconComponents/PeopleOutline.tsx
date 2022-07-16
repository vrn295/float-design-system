import * as React from 'react';
import { SVGProps } from 'react';

const SvgPeopleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5ZM4.34 17A9.642 9.642 0 0 1 9 15.75 9.642 9.642 0 0 1 13.66 17ZM9 12a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 9 12Zm0-5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9 7Zm7.04 6.81A4.193 4.193 0 0 1 18 17.25V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44ZM15 12a3.5 3.5 0 0 0 0-7 3.446 3.446 0 0 0-1.5.35 5.461 5.461 0 0 1 0 6.3A3.446 3.446 0 0 0 15 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPeopleOutline;
