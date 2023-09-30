import { SVGProps } from "react"
const WindIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    width="1em"
    height="1em"  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m0-16L8 8m4-4 4 4"
    />
  </svg>
)
export default WindIcon
