import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HistoryView from './views/history';
import FavoriteView from './views/favoriye';
import SearchView from './views/search';
import SearchDetailView from './views/detail';

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

function SearchStackView() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchView" component={SearchView} />
      <SearchStack.Screen name="Details" component={SearchDetailView} />
    </SearchStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="History" component={HistoryView} />
        <Tab.Screen name="Search" component={SearchStackView} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
