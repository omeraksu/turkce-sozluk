import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Button from './components/button'
import SearchView from './views/search'
import TabBar from './components/tab-bar'
import HistoryView from './views/history'
import FavoriteView from './views/favoriye'
import SearchDetailView from './views/detail'
import { IconLeft, IconMore } from './components/icons'

import theme from './utils/theme'

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
            title: route.params?.title || '',
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

function Navigation() {
  return (
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
  )
}

export default Navigation
