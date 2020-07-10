import * as React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import { ImageBackground, StatusBar } from 'react-native'

import bg from '../assets/bg.jpg'

import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'
import { LogoWhite } from '../components/icons'

function SearchView() {
  const [isChangeFocus, setChangeFocus] = React.useState(false)

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('light-content')
    }, [])
  )

  return (
    <Box as={SafeAreaView} bg="red" flex={1}>
      {/* Header */}
      <Box position="relative" zIndex={1} height={isChangeFocus ? 0 : 285}>
        <Box
          as={ImageBackground}
          source={bg}
          style={{ width: '100%', height: '100%' }}
        >
          {/* Logo */}
          <Box flex={1} alignItems="center" justifyContent="center">
            <LogoWhite color="white" />
          </Box>

          {/* Search */}
          <Box p={16} width="100%" mb={-42}>
            <Search onChangeFocus={(status) => setChangeFocus(status)} />
          </Box>
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Selam kanki</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchView
