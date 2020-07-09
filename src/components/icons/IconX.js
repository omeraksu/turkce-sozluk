import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgIconX(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className=""
      {...props}
    >
      <Path
        d="M14.22 4.375L10 8.594 5.781 4.375 4.375 5.781 8.594 10l-4.219 4.219 1.406 1.406L10 11.406l4.22 4.219 1.406-1.406L11.407 10l4.219-4.219-1.406-1.406z"
        fill="#48515B"
      />
    </Svg>
  )
}

export default SvgIconX
