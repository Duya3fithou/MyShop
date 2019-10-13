import React, { Component } from 'react';
import {
    Text, View, Image, TouchableOpacity, StyleSheet, TextInput
} from 'react-native';

import { ifIphoneX } from 'react-native-iphone-x-helper'
import DrawerNavigator from '../components/DrawerNavigator'
import icBack from '../Images/appIcon/back_white.png';
import icLogo from '../Images/appIcon/ic_logo.png'

const backgroundColor = '#0067a7';
export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
        }
    }
    signIn() {
        this.setState({
            isSignIn: true
        })
    }
    signUp() {
        this.setState({
            isSignIn: false
        })
    }
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Authentication';
        console.log('hello');
        let drawerIcon = () => (
            <Image
                source={require('./../Images/appIcon/home0.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );
        return { drawerLabel, drawerIcon };
    }

    render() {
        const { navigate } = this.props.navigation;
        const signInJSX = (
            <View >
                <TextInput style={styles.inputStyle} placeholder={'Enter your email'}>

                </TextInput>
                <TextInput style={styles.inputStyle} placeholder={'Enter your password'}>

                </TextInput>
                <TouchableOpacity style={styles.bigButton}>
                    <Text style={styles.buttonText}>Sign In Now</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (<View >
            <TextInput style={styles.inputStyle} placeholder={'Enter your name'}></TextInput>
            <TextInput style={styles.inputStyle} placeholder={'Enter your email'}></TextInput>
            <TextInput style={styles.inputStyle} placeholder={'Enter your password'}></TextInput>
            <TextInput style={styles.inputStyle} placeholder={'Re-enter your password'}></TextInput>
            <TouchableOpacity style={styles.bigButton}>
                <Text style={styles.buttonText}>Sign Up Now</Text>
            </TouchableOpacity>
        </View>);
        const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.ifIPX}></View>
                <View style={styles.contain}>
                    <View style={styles.row1}>
                        <TouchableOpacity onPress={() => navigate('Home page')}>
                            <Image source={icBack}
                                style={styles.iconStyle}
                            />
                        </TouchableOpacity>
                        <Text style={styles.tittleStyle}>Wearing a Dress</Text>
                        <Image source={icLogo} style={styles.iconStyle}></Image>
                    </View>
                    {mainJSX}
                    <View style={styles.controlStyle}>
                        <TouchableOpacity style={styles.signInStyle} onPress={this.signIn.bind(this)}>
                            <Text style={this.state.isSignIn ? styles.activeStyle : styles.inActiveStyle} 
                            >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signUpStyle} onPress={this.signUp.bind(this)}>
                            <Text style={this.state.isSignIn ? styles.inActiveStyle : styles.activeStyle} 
                            >Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}
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
    ifIPX: {
        ...ifIphoneX({
            height: 30,
            backgroundColor: '#3EBA77',

        }, {
            height: 0
        }),
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