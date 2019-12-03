import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
} from 'react-native';

import {validateEmail, validatePassword} from './../../helpers/validations';

export default class UserInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeText: '',
            firstTimeCheck: false,
        };
    }
    render() {
        const {validate} = this.props;
        return (
            <View>
                <View>
                    <Text style={styles.title}>
                        {this.props.title.toUpperCase()}:
                    </Text>
                </View>
                <View style={styles.inputWrapper}>
                    <Image
                        source={this.props.source}
                        style={styles.inlineImg}
                    />
                    <TextInput
                        style={[this.props.style, styles.input]}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.secureTextEntry}
                        placeholderTextColor="white"
                        onChangeText={typeText => {
                            if (this.props.validate == 'password') {
                            }
                            this.setState({typeText, firstTimeCheck: true});
                        }}
                    />
                    <Text style={styles.errorText}>
                        {this.state.firstTimeCheck && validate == 'password'
                            ? validatePassword(this.state.typeText)
                            : ''}
                        {this.state.firstTimeCheck && validate == 'username'
                            ? validateEmail(this.state.typeText)
                            : ''}
                    </Text>
                </View>
            </View>
        );
    }
}

const {width} = Dimensions.get('window');
const textInputWidth = 0.8 * width;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 10,
        color: '#ffffff',
    },
    title: {
        textAlign: 'left',
        width: textInputWidth,
        marginHorizontal: 20,
        color: '#ffffff',
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 999,
        width: 22,
        height: 22,
        left: 35,
        top: 9,
    },
    errorText: {
        color: 'red',
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 0,
        left: 20,
    },
});
