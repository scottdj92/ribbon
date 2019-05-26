/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { App } from './App';
import { ColorSelector, StripeCreator } from "./src/scenes";
import {name as appName} from './app.json';

const mainNavigator = createStackNavigator({
    App: { screen: App },
    ColorSelector: { screen: ColorSelector },
    StripeCreator: { screen: StripeCreator }
});

AppRegistry.registerComponent(appName, () => createAppContainer(mainNavigator));
