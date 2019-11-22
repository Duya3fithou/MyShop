import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Collection from '../components/screencomponents/main/Collection';
import Category from '../components/screencomponents/main/Category'
import TopProduct from '../components/screencomponents/main/TopProduct'
import initData from '../api/dataInit.js'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            types: [],
            topProducts: []
        }
    }

    componentDidMount() {
        initData()
            .then(resJSON => {
                const { type, product } = resJSON;
                this.setState({ types: type, topProducts: product });
            })

    }

    render() {
        const { types, topProducts } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <ScrollView style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                    <Collection />
                    <Category types={types} />
                    <TopProduct topProducts={topProducts} />
                </ScrollView>
            </View>

        );
    }
}
