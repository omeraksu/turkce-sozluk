import * as React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import { ImageBackground, StatusBar, Animated } from 'react-native'

import bg from '../assets/bg.jpg'

import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'
import { LogoWhite } from '../components/icons'

function SearchView() {
  const fadeAnim = React.useRef(new Animated.Value(285)).current
  const [isChangeFocus, setChangeFocus] = React.useState(false)

  React.useEffect(() => {
    if (isChangeFocus) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 220
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 285,
        duration: 220
      }).start()
    }
  }, [fadeAnim, isChangeFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isChangeFocus ? 'dark-content' : 'light-content')
    }, [isChangeFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isChangeFocus ? 'white' : 'red'} flex={1}>
      {/* Header */}
      <Box as={Animated.View} position="relative" zIndex={1} height={fadeAnim}>
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
      <Box flex={1} bg="white" pt={isChangeFocus ? 0 : 26}>
        {isChangeFocus ? (
          <Box px={30} pt={90} flex={1}>
            <Text>Geçmiş Aramalar</Text>
          </Box>
        ) : (
          <Box p={30} flex={1}>
            <Text>Öneriler</Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
