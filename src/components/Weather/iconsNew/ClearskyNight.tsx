import * as React from "react";
import type { SVGProps } from "react";
const SvgClearskyNight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    {...props}
  >
    <symbol id="clearsky_night_svg__b">
      <path
        fill="url(#clearsky_night_svg__a)"
        d="M28.43 0a28.44 28.44 0 0 1 3.87 14.32A28.61 28.61 0 0 1 3.69 42.93 28.71 28.71 0 0 1 0 42.66 28.59 28.59 0 1 0 28.43 0Z"
      />
    </symbol>
    <defs>
      <linearGradient
        id="clearsky_night_svg__a"
        x1="0%"
        x2="100%"
        y1="50%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#686e73" />
        <stop offset="100%" stopColor="#6a7075" />
      </linearGradient>
    </defs>
    <symbol id="clearsky_night_svg__c">
      <use
        xlinkHref="#clearsky_night_svg__b"
        width={100}
        height={100}
        transform="translate(20 20)"
      />
    </symbol>
    <use xlinkHref="#clearsky_night_svg__c" width={100} height={100} />
  </svg>
);
export default SvgClearskyNight;
