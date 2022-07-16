import { SVGProps } from 'react';

const SvgErrorOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
    <path
      d="M9 13h2v2H9Zm0-8h2v6H9Zm.99-5A10 10 0 1 0 20 10 10 10 0 0 0 9.99 0ZM10 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgErrorOutline;
