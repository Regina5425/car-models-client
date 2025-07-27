import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CartIcon = ({color}: {color: string}) => (
  <Svg fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.375 9.588V8.375c0-2.812 2.262-5.575 5.075-5.837 3.35-.325 6.175 2.312 6.175 5.6v1.725M11.25 27.5h7.5c5.025 0 5.925-2.012 6.187-4.462l.938-7.5C26.212 12.488 25.337 10 20 10H10c-5.338 0-6.213 2.488-5.875 5.537l.937 7.5c.263 2.45 1.163 4.463 6.188 4.463Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.37 15h.01M10.618 15h.011"
    />
  </Svg>
)
export default CartIcon
