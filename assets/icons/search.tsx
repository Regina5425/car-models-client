import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = ({color}: {color: string}) => (
  <Svg
    width={19}
    height={20}
    fill="none"
  >
    <Path
      fill={color}
      d="m18.65 18.682-5.434-5.622a7.785 7.785 0 0 0 1.863-5.068c0-4.23-3.326-7.672-7.415-7.672C3.576.32.25 3.762.25 7.992c0 4.23 3.326 7.672 7.414 7.672 1.878 0 3.59-.732 4.897-1.926l5.434 5.622.655-.678ZM7.664 14.705c-3.577 0-6.487-3.011-6.487-6.713 0-3.701 2.91-6.713 6.487-6.713s6.488 3.012 6.488 6.713c0 3.702-2.91 6.713-6.488 6.713Z"
    />
  </Svg>
)
export default SearchIcon;