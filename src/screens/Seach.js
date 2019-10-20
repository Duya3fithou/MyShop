import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

export default class MyWalletComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Seach';
        let tabBarIcon = () => (
           
            <Image
                source={require('./../Images/appIcon/search0.png')}
                style={{ width: 26, height: 26 }}
            />

        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        return (
            <View style = {{flex: 1}}> 
  
            <HeaderComponent {...this.props} />
                
                <View style={{
                    flex: 1,
                    backgroundColor: '#007256',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is Seach Screen</Text>
                </View>
            </View>
        )
    }
}