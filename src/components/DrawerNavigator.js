import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { TabNavigator } from './TabNavigatorComponent';
import Authentication from '../screens/Authentication';
import OderHistory from '../screens/OderHistory';
import ChangeInfo from '../screens/ChangeInfo';

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
  'TabNav': {
      screen: TabNavigator,
  }
};
let drawerNavigatorConfig = {
  initialRouteName: 'TabNav',
  drawerWidth: width / 2,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: 'red',
  },
  order: ["TabNav", "OderHistory", "ChangeInfo"],
};

const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;