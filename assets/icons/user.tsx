import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const UserIcon = ({color}: {color: string}) => (
  <Svg
    width={28}
    height={29}
    fill="none"
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.725}
      clipRule="evenodd"
    >
      <Path d="M14.021 25.611c-4.245 0-7.871-.66-7.871-3.306s3.603-5.089 7.871-5.089c4.246 0 7.871 2.419 7.871 5.065 0 2.645-3.602 3.33-7.87 3.33ZM14.013 13.55a5.045 5.045 0 1 0-5.045-5.044 5.027 5.027 0 0 0 5.01 5.043h.035Z" />
    </G>
  </Svg>
)
export default UserIcon

