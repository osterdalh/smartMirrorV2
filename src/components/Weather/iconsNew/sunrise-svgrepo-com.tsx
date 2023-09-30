import * as React from "react"
import { SVGProps } from "react"
const SunriseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10V3m0 0L9 6m3-3 3 3m-9 6-1-1m13 1 1-1M3 18h18M5 21h14M7 18a5 5 0 0 1 10 0"
    />
  </svg>
)
export default SunriseIcon
