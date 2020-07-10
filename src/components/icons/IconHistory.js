import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgIconHistory(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className=""
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.463 6.968A8.957 8.957 0 0122 12a8.935 8.935 0 01-1.538 5.033 9.085 9.085 0 01-2.428 2.43A8.96 8.96 0 0113 21a8.963 8.963 0 01-6.363-2.636l1.414-1.415a7.066 7.066 0 002.225 1.5c.423.18.864.316 1.313.408a7.117 7.117 0 002.823 0 6.98 6.98 0 004.392-2.945 6.975 6.975 0 001.054-5.327 6.93 6.93 0 00-1.053-2.5 6.973 6.973 0 00-1.892-1.893 7.038 7.038 0 00-2.501-1.052 7.117 7.117 0 00-2.823 0 7.034 7.034 0 00-4.394 2.946 6.941 6.941 0 00-1.194 3.926v.012H8L5 16l-3-3.975h2.001v-.012L4 12a8.964 8.964 0 012.636-6.364 9.056 9.056 0 012.862-1.929 8.965 8.965 0 011.69-.524 9.009 9.009 0 016.844 1.354c.478.323.924.691 1.332 1.098.408.407.777.855 1.099 1.333zM12 13V8h2v3h3v2h-5z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SvgIconHistory
