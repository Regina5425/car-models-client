import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
const FavouritesIcon = ({color}: {color: string}) => (
  <Svg
    width={29}
    height={29}
    fill="none"
  >
    <G
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.725}
    >
      <Path
        d="M4.236 14.038c-1.234-3.853.208-8.256 4.253-9.559a6.908 6.908 0 0 1 6.244 1.049c1.673-1.294 4.108-1.73 6.233-1.049 4.045 1.303 5.496 5.706 4.263 9.559-1.92 6.106-10.496 10.81-10.496 10.81s-8.512-4.632-10.497-10.81Z"
        clipRule="evenodd"
      />
      <Path d="M19.333 8.405a3.198 3.198 0 0 1 2.205 2.785" />
    </G>
  </Svg>
)
export default FavouritesIcon
