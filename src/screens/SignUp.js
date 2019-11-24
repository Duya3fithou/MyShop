import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import register from '../api/register'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: '',
        }
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress: () => this.props.gotoSignIn() },
            ],
            { cancelable: false },
        );
    }
    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.setState({ email: '', password: '', }) },
            ],
            { cancelable: false },
        );
    }
    registerUser() {
        const { name, email, password} = this.state;
        register (email, name, password)
        .then((res) => {
            if (res === 'THANH_CONG') return this.onSuccess();
            this.onFail();
        })
    }
    render() {
        return (
            <View >
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your name'}
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}>
                </TextInput>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your email'}
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}>
                </TextInput>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Enter your password'}
                    value={this.state.password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry>
                </TextInput>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={'Re-enter your password'}
                    value={this.state.repassword}
                    onChangeText={text => this.setState({ repassword: text })}
                    secureTextEntry>
                </TextInput>
                <TouchableOpacity
                    style={styles.bigButton}
                    onPress={this.registerUser.bind(this)}>
                    <Text style={styles.buttonText}>Sign Up Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignUp;
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