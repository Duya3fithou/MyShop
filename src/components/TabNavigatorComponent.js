import { createBottomTabNavigator } from 'react-navigation-tabs';
import Main from '../screens/Main';
import Cart from '../screens/Cart';
import Seach from '../screens/Seach';
import Contact from '../screens/Contact';

let routeConfigs = {
  'Home': {
    screen: Main,
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
console.log('helloTab');
let tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightblue',
      padding: -10
    },
  },
  order: ['Home', 'Cart', 'Seach', 'Contact'],
};

export const TabNavigator = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);