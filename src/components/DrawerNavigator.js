import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { TabNavigator } from './TabNavigatorComponent';
import Authentication from '../screens/Authentication';
import OderHistory from '../screens/OderHistory';
import ChangeInfo from '../screens/ChangeInfo';
import React, { Component } from 'react';
console.disableYellowBox = true;

var { width } = Dimensions.get('window');
let routeConfigs = {
  'Authentication': {
    screen: Authentication,
  },
  'OderHistory': {
    screen: OderHistory,
  },
  'ChangeInfo': {
    screen: ChangeInfo,
  },
  'Home page': {
      screen: TabNavigator,
  }
};
let drawerNavigatorConfig = {
  initialRouteName: 'Home page',
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red',
  },
  order: ['Home page','Authentication' ,"OderHistory", "ChangeInfo"],
};

const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;