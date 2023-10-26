import * as React from "react"
import { SVGProps } from "react"
const PointIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    fill="#fff"
    stroke="#fff"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M16 4.686 4.686 16 16 27.314 27.314 16 16 4.686zM10.343 16 16 10.343 21.657 16 16 21.657 10.343 16z"
      style={{
        fill: "#0b1719",
      }}
    />
  </svg>
)
export default PointIcon
