import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import signIn from '../api/sign.js'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }
    onSignIn = () => {
        const { email, password } = this.state;
        signIn(email, password)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    render() {
        const { email, password } = this.state;
        return (
            <View >
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your email'}
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                >
                </TextInput>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your password'}
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry>
                </TextInput>
                <TouchableOpacity style={styles.bigButton}
                onPress={this.onSignIn.bind(this)}>
                    <Text style={styles.buttonText}>Sign In Now</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default SignIn;
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 5,
        justifyContent: 'space-between',
    },
    row1: {
        paddingTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 30,
        height: 30
    },

    tittleStyle: {
        color: '#fff',
        fontFamily: 'Avenir',
        fontSize: 22
    },
    controlStyle: {
        flexDirection: 'row',
        width: 300,
        alignSelf: 'stretch',
        paddingBottom: 20,
        paddingLeft: 60
    },
    signInStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        marginLeft: 1
    },
    inActiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 15,
        paddingLeft: 30
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    }

});