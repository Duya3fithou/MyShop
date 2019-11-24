import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, RefreshControl, TouchableHighlight } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import backList from '../Images/appIcon/backList.png';
import sp1 from '../Images/temp/sp1.jpeg'
import getListProduct from '../api/getListProduct.js'
const url = 'http://192.168.1.11/app/images/product/'

export default class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listProduct: [],
        }

    }
    goBack() {
        this.props.navigation.navigate('Main');
    }
    gotoDetails = (product) => {
        this.props.navigation.navigate('ProductDetail', { product: product });
    }
    componentDidMount() {
        const idType = this.props.navigation.getParam('ListCate').id
        getListProduct(idType, 1)
            .then(arrProducts => {
                this.setState({
                    listProduct: arrProducts
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { container, wrapper, header, backIcon, titleStyle,
            productContainer, productInfo, productImage, lastRowInfo,
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail, color } = styles;
        const { name } = this.props.navigation.getParam('ListCate');

        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={container}>
                    <View style={wrapper}>
                        <View style={header}>
                            <TouchableOpacity onPress={this.goBack.bind(this)}>
                                <Image
                                    source={backList}
                                    style={backIcon}
                                />
                            </TouchableOpacity>
                            <Text style={titleStyle}>{name}</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <FlatList
                            data={this.state.listProduct}
                            renderItem={({ item }) => (
                                <View style={productContainer}>
                                    <Image style={productImage} source={{ uri: `${url}${item.images[0]}` }} />
                                    <View style={productInfo}>
                                        <Text style={txtName}>{item.name}</Text>
                                        <Text style={txtPrice}>{item.price}$</Text>
                                        <Text style={txtMaterial}>{item.material}</Text>
                                        <View style={lastRowInfo}>
                                            <Text style={txtColor}>{item.color}</Text>
                                            <View style={color} />
                                            <TouchableHighlight onPress={() => this.gotoDetails(item)}>
                                                <Text style={txtShowDetail}>
                                                    Details
                                                  </Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#DBDBD8',
        padding: 10,

    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        alignItems: 'center'

    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingHorizontal: 10
    },
    backIcon: {
        width: 28,
        height: 28,
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D56',
        fontSize: 22
    },
    productContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        borderTopColor: '#F0F0F0',
        borderBottomColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#fff',
        borderWidth: 1,

    },
    productImage: {
        width: 100,
        height: (100 * 452) / 361,
    },
    productInfo: {
        justifyContent: 'space-between',
        marginLeft: 15,
        flex: 1

    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: 22,
        fontWeight: '400'
    },
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65'
    },
    txtMaterial: {
        fontFamily: 'Avenir',
    },
    txtColor: {
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: 14
    },
    color: {
        backgroundColor: 'cyan',
        height: 16,
        width: 16,
        borderRadius: 8
    }

})

/**
 * <ScrollView style={wrapper}>
                        <View style={header}>
                            <TouchableOpacity onPress={this.goBack.bind(this)}>
                                <Image
                                    source={backList}
                                    style={backIcon}
                                />
                            </TouchableOpacity>
                            <Text style={titleStyle}>Party Dress</Text>
                            <View style={{ width: 30 }} />
                        </View>
                        <View style={productContainer}>
                            <Image style={productImage} source={sp1} />
                            <View style={productInfo}>
                                <Text style={txtName}>Lace Sleeve Si</Text>
                                <Text style={txtPrice}>117$</Text>
                                <Text style={txtMaterial}>Material Silk</Text>
                                <View style={lastRowInfo}>
                                    <Text style={txtColor}>Color RoyalBlue</Text>
                                    <View style={color} />
                                    <TouchableOpacity>
                                        <Text style={txtShowDetail}
                                        onPress = {this.gotoDetail}>
                                            Details
                                    </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
 */