import * as React from 'react';
import { SVGProps } from 'react';

const SvgPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 6a2 2 0 1 1-2 2 2.006 2.006 0 0 1 2-2Zm0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2Zm0-12a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPerson;
