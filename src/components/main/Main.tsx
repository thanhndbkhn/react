import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    Linking,
    Alert,
    TouchableHighlight,
    KeyboardAvoidingView,
    // TouchableHighlight,
} from 'react-native';

import { NavigationStackProp } from 'react-navigation-stack'
import ListUser from '../manager/ListUser';
type MainProps = {
    navigation: NavigationStackProp<{}>;
};

export default class Main extends  React.Component<MainProps> {
    render() {
        return (
            <View style={{flex: 1}}>
            <ListUser/>
            </View>
        )
    }
}
