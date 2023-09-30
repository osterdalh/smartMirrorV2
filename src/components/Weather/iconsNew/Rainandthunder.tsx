import * as React from "react";
import type { SVGProps } from "react";
const SvgRainandthunder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    {...props}
  >
    <symbol id="rainandthunder_svg__d">
      <path
        fill="#0062bf"
        d="M2.5 13A2.5 2.5 0 0 1 .21 9.51l3.55-8a2.5 2.5 0 0 1 4.57 2l-3.55 8A2.5 2.5 0 0 1 2.5 13Z"
      />
    </symbol>
    <symbol id="rainandthunder_svg__a">
      <path
        fill="#ffdd15"
        d="m19.6 23.42-6.86-3.03L15.55 5 5 24.49l7.08 3.02L7.49 45 19.6 23.42z"
      />
    </symbol>
    <symbol id="rainandthunder_svg__c">
      <path d="M55.7 5a23.94 23.94 0 0 0-21.33 13.05 9.9 9.9 0 0 0-12.78 5.56 15 15 0 0 0-1.71-.1A14.81 14.81 0 0 0 9.2 28 14.63 14.63 0 0 0 5 38.17v.21a14.83 14.83 0 0 0 14.88 14.68h55.71a14.3 14.3 0 0 0 3.67-28.14A23.93 23.93 0 0 0 55.7 5Z" />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAkCAMAAAAkYj0PAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURSgoKExpcaCgoFBQUG5ublBQUISEhI1fsT0AAAAHdFJOUxsACBsPFRpGXuFgAAABWElEQVRIx7XV25bDIAgF0BMu/v8nF/E+iWlqHNKVN3cpIMXxL4GFM3SQfTazkUyxk63oLYwlVSy2silXkS/wUrZS2a3ZCn1zsdSw7UUYijuHsTa1IvfwWrbSXLkc4N9r27JViwmM1UtWXA3hohQ41m6vl8FQZi7wu2z7KXPW4uRiZS+2AmdXN7DdQEQWQHYHlt6z0dXBBa2xeeVktiZc1jDoF5eGkI4d4MjKc7cNbZ3bqjocLLx5oPDYTaIftcfvAvcs2GFxVsJTOP1wO1jGdUSLaz/DWA1Tl45+Tkqul2ArcPzayGq8JafOUffP3TUp6JQs+Rptc6vtmtBkUw+dv0NzWG0PYf8O7Ym09+ITXyXOPZqEX95aFe3PKxRsL2XV3HR+ZALirPSF0ceHp6F51WBv1A22VaW2GHWzWvat8LOAPf4CrjrA+neNK7+PQBf/DmmLrId09/QDWyESBsibwBUAAAAASUVORK5CYII="
        width={85}
        height={43}
        x={5}
        y={14}
      />
    </symbol>
    <defs>
      <mask id="rainandthunder_svg__b">
        <path fill="#fff" d="M0 0h100v100H0z" />
        <use
          xlinkHref="#rainandthunder_svg__a"
          width={100}
          height={100}
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={8}
          transform="translate(37 51)"
        />
      </mask>
    </defs>
    <symbol id="rainandthunder_svg__e">
      <g mask="url(#rainandthunder_svg__b)">
        <use
          xlinkHref="#rainandthunder_svg__c"
          width={100}
          height={100}
          fill="#b2b2b2"
          transform="translate(3 18)"
        />
      </g>
      <use
        xlinkHref="#rainandthunder_svg__a"
        width={100}
        height={100}
        transform="translate(37 51)"
      />
      <use
        xlinkHref="#rainandthunder_svg__d"
        width={100}
        height={100}
        transform="translate(29 78)"
      />
      <use
        xlinkHref="#rainandthunder_svg__d"
        width={100}
        height={100}
        transform="translate(50 87)"
      />
      <use
        xlinkHref="#rainandthunder_svg__d"
        width={100}
        height={100}
        transform="translate(65 78)"
      />
    </symbol>
    <use xlinkHref="#rainandthunder_svg__e" width={100} height={100} />
  </svg>
);
export default SvgRainandthunder;
