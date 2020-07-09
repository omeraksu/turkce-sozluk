import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgIconSearch(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      className=""
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.667 21A9.333 9.333 0 1121 11.667a9.293 9.293 0 01-1.96 5.723l6.285 6.285-1.65 1.65-6.285-6.285A9.293 9.293 0 0111.667 21zm7-9.333a7 7 0 11-14 0 7 7 0 0114 0z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SvgIconSearch
