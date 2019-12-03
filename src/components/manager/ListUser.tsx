import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Alert, TextInput , Picker , TouchableHighlight} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import getListUser from './../../api/getListUser';
import { TouchableOpacity } from 'react-native-gesture-handler';
const url = 'http://10.0.2.108:81/app/images/user/';
type ListUserProps = {
};

class ListUser extends React.Component<ListUserProps> {
    constructor(props: Readonly<{}>) {
        super(props);
    }


    state = {
        loading: false,
        data: [
            {

            },
        ],
        error: null,
    };

    arrayholder = [];

    componentDidMount() {
        this.makeRemoteRequest();
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

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        );
    };

      searchFilterFunction = (text: { toUpperCase: () => void; }) => {
        this.setState({
          value: text,
        });

        const newData = this.arrayholder.filter((item: { name: { title: { toUpperCase: () => void; }; first: { toUpperCase: () => void; }; last: { toUpperCase: () => void; }; }; }) => {
          const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          data: newData,
        });
      };

      renderHeader = () => {
        return (
            <View>
                <View style={styles.inputSearch}>
                    <TextInput style={styles.input}></TextInput>
                    <Picker
                        selectedValue={this.state.language}
                        style={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Phòng số 1" value="1" />
                        <Picker.Item label="Phòng số 2" value="2" />
                    </Picker>
                </View>
                <View style={styles.actionButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text>Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text>Add</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
      };

    render() {
        if (this.state.loading) {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator />
            </View>
          );
        }
        return (
            <View style={styles.container}>
                <FlatList style={styles.container}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            key={item.user_id}
                            leftAvatar={{ source: { uri: `${url}/${item.image}`} }}
                            title={item.full_name}
                            subtitle={item.group_name}
                            bottomDivider
                            rightIcon={<Icon name="chevron-right" size={20} color="#9999" onPress={() => this.showInfo()}/>}
                        />
                    )}
                    keyExtractor={item => item.user_id}
                  ItemSeparatorComponent={this.renderSeparator}
                  ListHeaderComponent={this.renderHeader}
                />

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    actionButton: {
        alignItems: 'center',
        flexDirection: 'row',
    },

    button: {
        width: 100,
        borderColor: 'red'
    },

    inputSearch: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },

    input: {
        height: 30,
        fontSize: 14,
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    pickerItem: {
        width: 140,
        alignItems: 'center',
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ListUser;
