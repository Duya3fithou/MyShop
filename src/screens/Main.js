import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Collection from '../components/screencomponents/main/Collection';
import Category from '../components/screencomponents/main/Category'
import TopProduct from '../components/screencomponents/main/TopProduct'

export default class Main extends Component {


    render() {
        return (
            <View style = {{flex: 1}}>
                <HeaderComponent {...this.props} />
                <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>

                    
                    <Collection />
                    <Category />
                    <TopProduct />
                </ScrollView>
            </View>

        );
    }
}