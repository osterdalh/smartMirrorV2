import * as React from "react";
import type { SVGProps } from "react";
const SvgFog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    {...props}
  >
    <symbol id="fog_svg__b">
      <g fill="#999">
        <path d="M88.7 3H14.3c-.7 0-1.3-.7-1.3-1.5S13.6 0 14.3 0h74.4c.7 0 1.3.7 1.3 1.5S89.4 3 88.7 3zM75.7 11H1.3C.6 11 0 10.3 0 9.5S.6 8 1.3 8h74.4c.7 0 1.3.7 1.3 1.5s-.6 1.5-1.3 1.5zM86.7 19H12.3c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5h74.4c.7 0 1.3.7 1.3 1.5s-.6 1.5-1.3 1.5z" />
      </g>
    </symbol>
    <symbol id="fog_svg__a">
      <path d="M55.7 5a23.94 23.94 0 0 0-21.33 13.05 9.9 9.9 0 0 0-12.78 5.56 15 15 0 0 0-1.71-.1A14.81 14.81 0 0 0 9.2 28 14.63 14.63 0 0 0 5 38.17v.21a14.83 14.83 0 0 0 14.88 14.68h55.71a14.3 14.3 0 0 0 3.67-28.14A23.93 23.93 0 0 0 55.7 5Z" />
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAAkCAMAAAAkYj0PAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURSgoKExpcaCgoFBQUG5ublBQUISEhI1fsT0AAAAHdFJOUxsACBsPFRpGXuFgAAABWElEQVRIx7XV25bDIAgF0BMu/v8nF/E+iWlqHNKVN3cpIMXxL4GFM3SQfTazkUyxk63oLYwlVSy2silXkS/wUrZS2a3ZCn1zsdSw7UUYijuHsTa1IvfwWrbSXLkc4N9r27JViwmM1UtWXA3hohQ41m6vl8FQZi7wu2z7KXPW4uRiZS+2AmdXN7DdQEQWQHYHlt6z0dXBBa2xeeVktiZc1jDoF5eGkI4d4MjKc7cNbZ3bqjocLLx5oPDYTaIftcfvAvcs2GFxVsJTOP1wO1jGdUSLaz/DWA1Tl45+Tkqul2ArcPzayGq8JafOUffP3TUp6JQs+Rptc6vtmtBkUw+dv0NzWG0PYf8O7Ym09+ITXyXOPZqEX95aFe3PKxRsL2XV3HR+ZALirPSF0ceHp6F51WBv1A22VaW2GHWzWvat8LOAPf4CrjrA+neNK7+PQBf/DmmLrId09/QDWyESBsibwBUAAAAASUVORK5CYII="
        width={85}
        height={43}
        x={5}
        y={14}
      />
    </symbol>
    <symbol id="fog_svg__c">
      <use
        xlinkHref="#fog_svg__a"
        width={100}
        height={100}
        fill="#ddd"
        transform="translate(3 18)"
      />
      <use
        xlinkHref="#fog_svg__b"
        width={100}
        height={100}
        transform="translate(0 76)"
      />
    </symbol>
    <use xlinkHref="#fog_svg__c" width={100} height={100} />
  </svg>
);
export default SvgFog;
