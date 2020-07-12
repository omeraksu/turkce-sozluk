import * as React from 'react'
import 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from './utils/theme'
import Navigation from './navigation'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
