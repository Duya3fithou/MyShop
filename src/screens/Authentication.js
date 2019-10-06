import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,
} from 'react-native';
//import HeaderComponent from './HeaderComponent';
import TabNavigator from '../components/TabNavigatorComponent'; // đưa tab vào page Home, 
import HeaderComponent from '../components/HeaderComponent'

const backgroundColor = '#0067a7';
export default class Authentication extends Component {
    
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
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <HeaderComponent {...this.props} />
            </View>
        );
    }
}