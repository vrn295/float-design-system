import * as React from 'react';
import { SVGProps } from 'react';

const SvgVisibilityOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Zm0 0h24v24H0Zm0 0h24v24H0Zm0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.647 9.647 0 0 1-2.41 3.12l1.41 1.41A11.8 11.8 0 0 0 23 11.5 11.834 11.834 0 0 0 8.36 4.57l1.65 1.65A10.108 10.108 0 0 1 12 6Zm-1.07 1.14L13 9.21a2.5 2.5 0 0 1 1.28 1.28l2.07 2.07a4.679 4.679 0 0 0 .14-1.07A4.483 4.483 0 0 0 12 7a4.244 4.244 0 0 0-1.07.14ZM2.01 3.87l2.68 2.68A11.738 11.738 0 0 0 1 11.5 11.827 11.827 0 0 0 12 19a11.73 11.73 0 0 0 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45Zm7.5 7.5 2.61 2.61A.5.5 0 0 1 12 14a2.5 2.5 0 0 1-2.5-2.5c0-.05.01-.08.01-.13Zm-3.4-3.4 1.75 1.75a4.6 4.6 0 0 0-.36 1.78 4.505 4.505 0 0 0 6.27 4.14l.98.98A10.432 10.432 0 0 1 12 17a9.77 9.77 0 0 1-8.82-5.5 9.9 9.9 0 0 1 2.93-3.53Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVisibilityOff;
