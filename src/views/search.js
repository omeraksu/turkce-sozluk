import * as React from 'react'
import { StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import SafeAreaView from 'react-native-safe-area-view'

import Box from '../components/box'
import HomeSearch from '../components/home-search'
import SuggestCard from '../components/suggest-card'
import SearchHistoryList from '../components/search-history-list'

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

function SearchView({ navigation }) {
  const [isSearchFocus, setChangeFocus] = React.useState(false)
  const [homeData, setHomeData] = React.useState(null)

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik')
    const data = await response.json()
    setHomeData(data)
  }

  React.useEffect(() => {
    getHomeData()
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content')
    }, [isSearchFocus])
  )

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'} flex={1}>
      {/* Header */}
      <HomeSearch
        isSearchFocus={isSearchFocus}
        onSearchFocus={setChangeFocus}
      />
      {/* Content */}
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box pt={90} flex={1}>
            <SearchHistoryList data={DATA} />
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <SuggestCard
              title="Bir kelime"
              data={homeData?.kelime[0]}
              onPress={() => {
                navigation.navigate('Details', {
                  title: homeData?.kelime[0].madde
                })
              }}
            />
            <SuggestCard
              mt={40}
              title="Bir Deyim - Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate('Details', {
                  title: homeData?.atasoz[0].madde
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SearchView
