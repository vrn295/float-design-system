import * as React from 'react';
import { SVGProps } from 'react';

const SvgAccountCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2ZM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78a7.925 7.925 0 0 1-9.86 0Zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.994 7.994 0 1 1 20 12a7.95 7.95 0 0 1-1.64 4.83ZM12 6a3.5 3.5 0 1 0 3.5 3.5A3.491 3.491 0 0 0 12 6Zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAccountCircle;
