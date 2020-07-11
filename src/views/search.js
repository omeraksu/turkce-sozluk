import * as React from 'react'
import SafeAreaView from 'react-native-safe-area-view'
import { useFocusEffect } from '@react-navigation/native'
import { StatusBar, Animated, FlatList } from 'react-native'

import Bg from '../components/bg'
import Box from '../components/box'
import Text from '../components/text'
import Search from '../components/search'
import { LogoWhite } from '../components/icons'
import { CardContainer, CardSummary, CardTitle } from '../components/card'
import { SimpleCardContainer, SimpleCardTitle } from '../components/simple-card'

const DATA = [
  {
    id: 'bd7acbea',
    title: 'First Item 1',
    summary: 'Summary Item 1'
  },
  {
    id: '3ac68afc',
    title: 'Second Item 2',
    summary: 'Summary Item 2'
  },
  {
    id: '58694a0f',
    title: 'Third Item 3',
    summary: 'Summary Item 3'
  }
]

const HERO_HEIGHT = 230

function SearchView({ navigation }) {
  const [bgOpacity] = React.useState(new Animated.Value(1))
  const [heroHeight] = React.useState(new Animated.Value(HERO_HEIGHT))
  const [isChangeFocus, setChangeFocus] = React.useState(false)

  React.useEffect(() => {
    if (isChangeFocus) {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 220,
        useNativeDriver: false
      }).start()
      // hero
      Animated.timing(heroHeight, {
        toValue: 0,
        duration: 220
      }).start()
    } else {
      // bg-opacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: false
      }).start()
      // hero
      Animated.timing(heroHeight, {
        toValue: HERO_HEIGHT,
        duration: 220
      }).start()
    }
  }, [bgOpacity, heroHeight, isChangeFocus])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isChangeFocus ? 'dark-content' : 'light-content')
    }, [isChangeFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isChangeFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        <Box mt={-60} as={Animated.View} opacity={bgOpacity}>
          <Bg pt={60} pb={26}>
            <Box flex={1} alignItems="center" justifyContent="center">
              <LogoWhite color="white" />
            </Box>
          </Bg>
        </Box>

        {/* Search */}
        <Box p={16} flex={1} pt={isChangeFocus ? 40 : -42} width="100%">
          <Search onChangeFocus={(status) => setChangeFocus(status)} />
        </Box>
      </Box>

      {/* Content */}
      <Box flex={1} bg="softRed" pt={isChangeFocus ? 0 : 26}>
        {isChangeFocus ? (
          <Box pt={90} flex={1}>
            <FlatList
              style={{ padding: 16 }}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Box py={6}>
                  <SimpleCardContainer>
                    <SimpleCardTitle>{item.title}</SimpleCardTitle>
                  </SimpleCardContainer>
                </Box>
              )}
              ListHeaderComponent={
                <Text mb={10} color="textLight">
                  SON ARAMALAR
                </Text>
              }
            />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color="textLight">Bir deyim</Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Details')}
              >
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para).</CardSummary>
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text color="textLight">Bir deyim - Atasözü</Text>
              <CardContainer
                mt={10}
                onPress={() => navigation.navigate('Details')}
              >
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek.
                </CardSummary>
              </CardContainer>
            </Box>

            {/*
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Box pb={20}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
            />
            */}
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
