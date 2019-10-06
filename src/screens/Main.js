import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => (
            <Image
                source={require('./../Images/appIcon/home.png')}
                style={{ width: 26, height: 26, tintColor: '#0067a7' }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }
    
    render() {
        console.log('home');
        return (
            <View style={{flex: 1}}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    backgroundColor: '#0067a7',
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