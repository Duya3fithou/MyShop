import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import { withNavigation } from 'react-navigation';
const url = 'http://localhost/app/images/product/';


class TopProduct extends Component {
    showDetails = (topProducts) => {
        this.props.navigation.navigate('ProductDetail',{ product: topProducts });
        
    }

    render() {
        const { topProducts } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.tittleWrapper}>
                    <Text style={styles.tittle}>TOP PRODUCT</Text>
                </View>
                <View style={styles.body}>
                    {topProducts.map(e => (
                        <TouchableOpacity style={styles.productWrapper} onPress={() => this.showDetails(e)} key = {e.id}>
                            <Image source={{uri: `${url}${e.images[1]}`}}
                                style={styles.productImage}
                            />
                            <Text style={styles.productName}>
                                {e.name.toUpperCase()}
                                </Text>
                            <Text style={styles.productPrice}>
                                {e.price}
                                </Text>
                        </TouchableOpacity>
                    ))
                    }
                </View>
            </View>
        );
    }
}




export default withNavigation(TopProduct);
const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productImageHeight = (productWidth / 361) * 452;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    tittleWrapper: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    tittle: {
        color: '#AFAEAF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productWrapper: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3

    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#AFAEAF',
        marginVertical: 5
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90',
    }
})
