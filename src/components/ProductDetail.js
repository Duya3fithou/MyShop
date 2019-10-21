import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';


export default class ProductDetail extends Component {
    goBack(){
        this.props.navigation.navigate('ListProduct')
    }

    render() {
        return (
            <View style = {{flex: 1}}> 
  
            <HeaderComponent {...this.props} />
                <View>
                    <TouchableOpacity onPress={this.goBack.bind(this)}>
                        <Text>
                            go back to List
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}