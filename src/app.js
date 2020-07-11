import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import TabBar from './components/tab-bar'
import HistoryView from './views/history'
import FavoriteView from './views/favoriye'
import SearchView from './views/search'
import SearchDetailView from './views/detail'
import { IconLeft, IconMore } from './components/icons'

import theme from './utils/theme'
import Button from './components/button'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function SearchStackView() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchView}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <Stack.Screen
        name="Details"
        component={SearchDetailView}
        options={({ route, navigation }) => {
          return {
            title: (route.params && route.params.title) || '',
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: 'transparent'
            },
            headerLeft: () => (
              <Button
                height="100%"
                px={20}
                onPress={() => navigation.navigate('Search')}
              >
                <IconLeft color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button height="100%" px={20}>
                <IconMore color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
      />
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
