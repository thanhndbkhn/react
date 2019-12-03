import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert, TextInput , Picker , TouchableHighlight} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import getListUser from './../../api/getListUser';
import { TouchableOpacity } from 'react-native-gesture-handler';
type AddUserProps = {
};

class AddUser extends React.Component<AddUserProps> {
    constructor(props: Readonly<{}>) {
        super(props);
    }

    arrayholder = [];

    componentDidMount() {
        // this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        this.setState({ loading: true });
        getListUser().then((_res: any) => {
            this.setState({
                data: _res,
                error: null,
                loading: false,
            });
        })
    };

    showInfo = () => {
        Alert.alert('ttt');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>aaa</Text>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default AddUser;
