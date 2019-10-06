import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';


export default class Cart extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Cart';
        let tabBarIcon = () => (
            <Image
                source={require('./../Images/appIcon/cart.png')}
                style={{ width: 26, height: 26, tintColor: '#e97600' }}
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
                    backgroundColor: '#e97600',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Cart Screen</Text>
                </View>
            </View>

        );
    }
}