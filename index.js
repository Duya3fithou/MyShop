

import {AppRegistry} from 'react-native';
//import App from './src/components/App';
import {name as appName} from './app.json';
import  AppContainer  from './src/components/DrawerNavigator';

AppRegistry.registerComponent(appName, () => AppContainer);
