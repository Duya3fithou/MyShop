import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Dimensions, FlatList } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
const url = 'http://192.168.1.11/app/images/product/';
import global from '../components/global.js';
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
export default class Seach extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct: []
        };
        global.setArraySeach = this.setSeachArray.bind(this)
    }

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
    setSeachArray(arrProduct) {
        this.setState({
            listProduct: arrProduct
        })
    }

    gotoDetail(product) {
        this.props.navigation.navigate('ProductDetail', {product})
    }
    render() {
        const {
            product, mainRight, txtMaterial, txtColor,
            txtName, txtPrice, productImage,
            txtShowDetail, showDetailContainer, wrapper
        } = styles;
        console.log("aaaa")
        console.log(this.state.listProduct)
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />

                <FlatList
                    style={wrapper}
                    data={this.state.listProduct}
                    renderItem={({ item }) => (
                        <View style={product}>
                            <Image source={{ uri: `${url}${item.images[0]}` }} style={productImage} />
                            <View style={mainRight}>
                                <Text style={txtName}>{toTitleCase(item.name)}</Text>
                                <Text style={txtPrice}>{item.price} $</Text>
                                <Text style={txtMaterial}>Material: {item.material}</Text>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={txtColor}>{item.color}</Text>
                                    <View
                                        style={{
                                            height: 15,
                                            width: 15,
                                            backgroundColor: 'white',
                                            borderRadius: 15,
                                            marginLeft: 10
                                        }}
                                    />
                                </View>
                                <TouchableOpacity style={showDetailContainer}
                                onPress={()=>{ this.gotoDetail(item)}}>
                                    <Text style={txtShowDetail}>Show Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}
const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#DFDFDF',
        flex: 1
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtColor: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        paddingLeft: 20,
        color: 'black',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginTop: 100
    }
});
