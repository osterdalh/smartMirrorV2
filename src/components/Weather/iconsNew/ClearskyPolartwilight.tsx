import * as React from "react";
import type { SVGProps } from "react";
const SvgClearskyPolartwilight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    {...props}
  >
    <symbol id="clearsky_polartwilight_svg__d">
      <path
        fill="url(#clearsky_polartwilight_svg__a)"
        d="M66.64 47.86 82 41l-15.36-6.88 9.84-13.66-16.72 1.76 1.7-16.75-13.6 9.89L41 0l-6.88 15.36-13.66-9.84 1.76 16.72-16.75-1.7 9.89 13.6L0 41l15.36 6.83-9.84 13.71 16.72-1.76-1.7 16.75 13.6-9.89L41 82l6.83-15.36 13.66 9.84-1.71-16.72 16.75 1.69Z"
        className="clearsky_polartwilight_svg__sun-glow"
      />
      <path
        fill="#ffd348"
        d="M19.28 53.5a25 25 0 1 0 9.15-34.16 25 25 0 0 0-9.15 34.16Z"
        className="clearsky_polartwilight_svg__sun-outer"
      />
      <path
        fill="url(#clearsky_polartwilight_svg__b)"
        d="M22.74 51.5a21 21 0 1 0 7.69-28.69 21 21 0 0 0-7.69 28.69Z"
        className="clearsky_polartwilight_svg__sun-inner"
      />
    </symbol>
    <symbol id="clearsky_polartwilight_svg__e">
      <g mask="url(#clearsky_polartwilight_svg__c)">
        <use
          xlinkHref="#clearsky_polartwilight_svg__d"
          width={100}
          height={100}
          className="clearsky_polartwilight_svg__sun-primitive"
          transform="translate(4 -40)"
        />
      </g>
      <path
        fill="#333"
        d="M88.29 2.7H1.71A1.56 1.56 0 0 1 0 1.35 1.56 1.56 0 0 1 1.71 0h86.58A1.56 1.56 0 0 1 90 1.35a1.56 1.56 0 0 1-1.71 1.35Z"
      />
    </symbol>
    <defs>
      <radialGradient
        id="clearsky_polartwilight_svg__a"
        cx={41}
        cy={41}
        r={41}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="54%" stopColor="#d6b849" />
        <stop offset="67%" stopColor="#ffce47" />
        <stop offset="100%" stopColor="#ffdb73" />
      </radialGradient>
      <linearGradient
        id="clearsky_polartwilight_svg__b"
        x1="0%"
        x2="100%"
        y1="0%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#ffaf22" />
        <stop offset="100%" stopColor="#f09900" />
      </linearGradient>
      <mask id="clearsky_polartwilight_svg__c">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </mask>
    </defs>
    <symbol id="clearsky_polartwilight_svg__f">
      <use
        xlinkHref="#clearsky_polartwilight_svg__e"
        width={100}
        height={100}
        transform="translate(5 37)"
      />
    </symbol>
    <use xlinkHref="#clearsky_polartwilight_svg__f" width={100} height={100} />
  </svg>
);
export default SvgClearskyPolartwilight;
