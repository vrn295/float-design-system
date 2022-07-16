import * as React from 'react';
import { SVGProps } from 'react';

const SvgLocationOff = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 4a5 5 0 0 1 5 5 9.015 9.015 0 0 1-1 3.62l1.49 1.49A12.043 12.043 0 0 0 19 9 7 7 0 0 0 7.25 3.86l1.43 1.43A4.962 4.962 0 0 1 12 4Zm0 2.5a2.459 2.459 0 0 0-1.56.56l3.5 3.5A2.459 2.459 0 0 0 14.5 9 2.5 2.5 0 0 0 12 6.5ZM3.41 2.86 2 4.27l3.18 3.18A7.221 7.221 0 0 0 5 9c0 5.25 7 13 7 13a45.806 45.806 0 0 0 3.38-4.35L18.73 21l1.41-1.41ZM12 18.88c-2.01-2.58-4.8-6.74-4.98-9.59l6.92 6.92c-.65.98-1.33 1.89-1.94 2.67Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgLocationOff;
