import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
const HomeIcon = ({color}: {color: string}) => (
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
    >
      <Path d="M10.44 19.256h6.688" />
      <Path
        d="M2.76 16.47c0-6.476.706-6.024 4.507-9.548C8.93 5.582 11.517 3 13.752 3c2.233 0 4.872 2.57 6.55 3.921 3.801 3.525 4.506 3.073 4.506 9.549 0 9.53-2.253 9.53-11.024 9.53C5.013 26 2.76 26 2.76 16.47Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
)
export default HomeIcon

