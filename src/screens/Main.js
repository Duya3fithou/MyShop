import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Collection from '../components/screencomponents/main/Collection';
import Category from '../components/screencomponents/main/Category'
import TopProduct from '../components/screencomponents/main/TopProduct'

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = (focused) => (
            focused ?
                <Image
                    source={require('./../Images/appIcon/home.png')}
                    style={{ width: 26, height: 26 }}
                />
                :
                <Image
                    source={require('./../Images/appIcon/home0.png')}
                    style={{ width: 26, height: 26 }}
                />

        );
        return { tabBarLabel, tabBarIcon };
    };

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