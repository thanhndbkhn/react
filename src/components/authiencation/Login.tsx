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

import global from './../../global';

import saveToken from './../../api/saveToken';
import signIn from './../../api/signIn';


import {validateEmail, validatePassword} from './../../helpers/validations';
import {SocialIcon} from 'react-native-elements';

const {width} = Dimensions.get('window');
const textInputWidth = 0.8 * width;
const textInputHeight = 45;
const borderRadius = 10;

import usernameImg from './../images/username.png';
import passwordImg from './../images/password.png';

import { NavigationStackProp } from 'react-navigation-stack'
type LoginProps = {
    navigation: NavigationStackProp<{}>;
};

export default class Login extends  React.Component<LoginProps> {
    state = {
        username: '',
        password: '',
        firstTimeCheckEmail: false,
        firstTimeCheckPass: false
    }

    onSignIn() {
        const { username, password } = this.state;
        signIn(username, password)
            .then((_res: any) => {
                global.onSignIn = _res.user;
                console.log(_res.user);
                saveToken(_res.token);
                // ridirect to main
                this.props.navigation.navigate("Main")
            })
            .catch((err: any) => console.log(err));
    }

    render() {
        const { username, password } = this.state;
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                enabled>
                <View>
                <View>
                    <Text style={styles.title}>
                        Email:
                    </Text>
                </View>
                <View>
                    <Image
                        source={usernameImg}
                        style={styles.inlineImg}
                    />
                    <TextInput
                        style={[styles.myTextInput, styles.input]}
                        placeholder="email"
                        secureTextEntry={false}
                        placeholderTextColor="white"
                        onChangeText={username => {
                            this.setState({username, firstTimeCheckEmail: true});
                        }}
                    />
                    <Text style={styles.errorText}>
                        {this.state.firstTimeCheckEmail ? validateEmail(this.state.username) : ''}
                    </Text>
                </View>
                <View>
                    <Text style={styles.title}>
                        Password:
                    </Text>
                </View>
                <View>
                    <Image
                        source={passwordImg}
                        style={styles.inlineImg}
                    />
                    <TextInput
                        style={[styles.myTextInput, styles.input]}
                        placeholder="password"
                        secureTextEntry={true}
                        placeholderTextColor="white"
                        onChangeText={password => {
                            this.setState({password, firstTimeCheckPass: true});
                        }}
                    />
                    <Text style={styles.errorText}>
                        {this.state.firstTimeCheckPass ? validatePassword(this.state.password) : ''}
                    </Text>
                </View>
            </View>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onSignIn.bind(this)}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableHighlight>
                <View style={styles.viewLine}>
                    <View style={styles.line} />
                    <Text>OR USE</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.socialIcon}>
                    <SocialIcon type="twitter" />
                    <SocialIcon type="facebook" />
                    <SocialIcon
                        type="google"
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b8d2d5',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewProfile: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingVertical: 20,
    },
    imageProfile: {
        width: 0.5 * textInputWidth,
        aspectRatio: 1 / 1,
        borderRadius: textInputWidth / 2,
    },
    textInput: {
        height: textInputHeight,
        fontSize: 14,
        width: textInputWidth,
        borderWidth: 1,
        borderRadius,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    myTextInput: {
        height: textInputHeight,
        width: textInputWidth,
        marginBottom: 20,
    },
    textPassword: {
        marginBottom: 0,
        backgroundColor: 'blue',
    },
    viewTextLink: {
        width: textInputWidth,
        position: 'relative',
        marginBottom: 10,
    },
    textLink: {
        textAlign: 'right',
        position: 'absolute',
        fontSize: 10,
        bottom: 0,
        right: 0,
    },
    viewLine: {
        flexDirection: 'row',
        height: 40,
        width: textInputWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginHorizontal: 10,
        flex: 1,
    },
    socialIcon: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        height: textInputHeight,
        backgroundColor: 'lightgreen',
        width: textInputWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius,
    },

    textButton: {
        color: 'black',
    },

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
