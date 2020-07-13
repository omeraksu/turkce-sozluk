import { View } from 'react-native'import styled from 'styled-components'import {  opacity,  compose,  color,  size,  border,  flexbox,  space,  borderRadius} from 'styled-system'const Box = styled(View)(  compose(opacity, color, size, space, flexbox, borderRadius, border))export default Box