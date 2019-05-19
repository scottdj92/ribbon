/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home } from './Home';
import { Selector } from "./Selector";
import {name as appName} from './app.json';

const mainNavigator = createStackNavigator({
    Home: { screen: Home },
    Selector: { screen: Selector }
});

const App = createAppContainer(mainNavigator);

AppRegistry.registerComponent(appName, () => App);
