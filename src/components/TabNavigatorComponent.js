import React, { Component } from 'react';
import { Text, View, Image, } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { TabBar } from "react-native-animated-nav-tab-bar";
import Main from '../screens/Main';
import Cart from '../screens/Cart';
import Seach from '../screens/Seach';
import Contact from '../screens/Contact';
import ListProduct from '../components/ListProduct';
import ProductDetail from './ProductDetail'


const HomeStack = createStackNavigator({
  Main: Main,
  ListProduct: ListProduct,
  ProductDetail: ProductDetail,
}, { headerMode: 'none' });

let routeConfigs = {
  'Home': {
    screen: HomeStack,
    navigationOptions : ({ navigation }) => {
      let tabBarLabel = 'Home';
      let tabBarIcon = () => (
        <Image
          source={require('./../Images/appIcon/home0.png')}
          style={{ width: 26, height: 26 }}
        />);
      return {
        tabBarLabel, tabBarIcon,
      }
    }
  },
  'Cart': {
    screen: Cart,
  },
  'Seach': {
    screen: Seach,
  },
  'Contact': {
    screen: Contact,
  },
};
let tabNavigatorConfig = {
  activeTintColor: '#2B7C85',
  inactiveTintColor: '#222222',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: '#fff',
      padding: -10
    },
  },
  order: ['Home', 'Cart', 'Seach', 'Contact'],

  tabBarComponent: props => <TabBar
    activeColors={['#e6b580', '#8e87d6', '#c095c9']}
    activeTabBackgrounds={['#ede7e6', '#eae3f6', '#eae4f6']}
    {...props}
  />,
  lazy: false
};


export const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);