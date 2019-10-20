import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

export default class ListProduct extends Component {


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
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>This is  Product detail screen</Text>
                </View>
            </View>
        )
    }
}