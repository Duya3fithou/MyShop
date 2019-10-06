import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';


export default class Contact extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Contact';
        let tabBarIcon = () => (
            <Image
                source={require('./../Images/appIcon/contact.png')}
                style={{ width: 26, height: 26, tintColor: '#964f8e' }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View>
            <HeaderComponent {...this.props} />
                
                <View style={{
                    flex: 1,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'blue' }}>This is Home Screen</Text>
                </View>
            </View>
        );
    }
}