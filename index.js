/* eslint-disable import/no-unresolved */
/* eslint-disable import/imports-first */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './App';
import { name as appName } from './app.json';

import Login from './src/components/authiencation/Login';
import Main from './src/components/main/Main';
import AddUser from './src/components/manager/AddUser';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
    {
        //screens
        Login: {
            screen: Login,
            navigationOptions: {
                header: null,
            },
        },

        //screens
        Main: {
            screen: Main,
            navigationOptions: {
                header: null,
            },
        },

        //screens
        AddUser: {
            screen: AddUser,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        //options
        initialRouteName: 'AddUser',
    },
);

AppRegistry.registerComponent(appName, () =>
    createAppContainer(StackNavigator),
);
