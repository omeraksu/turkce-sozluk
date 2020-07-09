import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HistoryView from './views/history';
import FavoriteView from './views/favoriye';
import SearchView from './views/search';
import SearchDetailView from './views/detail';

import TabBar from './components/tab-bar';
import Box from './components/box';
import {SafeAreaView} from 'react-native-safe-area-context';

import theme from './utils/theme';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

function SearchStackView() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchView} />
      <SearchStack.Screen name="Details" component={SearchDetailView} />
    </SearchStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Search"
            tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="History" component={HistoryView} />
            <Tab.Screen name="Search" component={SearchStackView} />
            <Tab.Screen name="Favorite" component={FavoriteView} />
          </Tab.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
