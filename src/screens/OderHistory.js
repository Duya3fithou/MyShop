import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent'

export default class OderHistory extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'OderHistory';
        let drawerIcon = () => (
            <Image
                source={require('./../Images/appIcon/phone.png')}
                style={{ width: 26, height: 26, tintColor: '#007256' }}
            />
        );
        return { drawerLabel, drawerIcon };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    backgroundColor: '#007256',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                        This is OderHistory Screen
          </Text>
                </View>
            </View>
        );
    }
}