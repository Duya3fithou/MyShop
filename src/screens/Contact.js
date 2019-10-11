import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';


const { height } = Dimensions.get('window');

export default class Contact extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Contact';
        let tabBarIcon = (focused) => (

            <Image
                source={require('./../Images/appIcon/contact.png')}
                style={{ width: 26, height: 26, tintColor: '' }}
            />

        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <HeaderComponent {...this.props} />

                <View style={{
                    flex: 1,
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'blue' }}>This is Contact Screen</Text>
                </View>
            </View>
        );
    }
}