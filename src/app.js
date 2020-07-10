import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HistoryView from './views/history'
import FavoriteView from './views/favoriye'
import SearchView from './views/search'
import SearchDetailView from './views/detail'

import TabBar from './components/tab-bar'

import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function SearchStackView() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Search" component={SearchView} />
      <Stack.Screen name="Details" component={SearchDetailView} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}
          >
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchStackView} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
