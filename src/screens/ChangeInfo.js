import React, { Component } from 'react';
//import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from '../components/HeaderComponent'

export default class ChangeInfo extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'CHangeInfo';
        let drawerIcon = () => (
            <Image
                source={require('./../Images/appIcon/back.png')}
                style={{ width: 26, height: 26, tintColor: '#964f8e' }}
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
                    backgroundColor: '#964f8e',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                        This is ChangeInfo Screen
                     </Text>
                </View>
            </View>
        );
    }
}