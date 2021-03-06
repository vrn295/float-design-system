import * as React from 'react';
import { SVGProps } from 'react';

const SvgUnfoldMore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0Z" fill="none" />
    <path
      data-name="Vector"
      d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9Zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnfoldMore;
