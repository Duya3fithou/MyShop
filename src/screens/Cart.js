import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import global from '../components/global.js'
function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
import saveCart from '../api/saveCart.js'
import getCart from '../api/getCart';

const url = 'http://192.168.1.13/app/images/product/'

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartArray: []
        }
        global.addProductToCart = this.addProductToCart.bind(this);
    }

    addProductToCart(product) {
        this.setState(
            { cartArray: this.state.cartArray.concat({ product, quantity: 1 }) },
            () => saveCart(this.state.cartArray));
    }
    componentDidMount() {
        getCart()
            .then(cartArray => this.setState({ cartArray: cartArray }))
    }

    static navigationOptions = ({ navigation }) => {
        let tabBarLabel = 'Cart';
        let tabBarIcon = () => (
            <Image
                source={require('./../Images/appIcon/cart0.png')}
                style={{ width: 26, height: 26, }}
            />
        );
        return { tabBarLabel, tabBarIcon };
    }

    gotoDetail() {
        this.props.navigation.navigate('ProductDetail')
    }

    incrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity + 1 }
        })
        this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
    }
    decrQuantity(productId) {
        const newCart = this.state.cartArray.map(e => {
            if (e.product.id !== productId) return e;
            return { product: e.product, quantity: e.quantity - 1 }
        })
        this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
    }

    removeProduct(productId) {
        const newCart = this.state.cartArray.filter(e => e.product.id !== productId)
        this.setState({ cartArray: newCart }, () => saveCart(this.state.cartArray));
    }

    render() {
        const { main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer } = styles;

        const { cartArray } = this.state;
        const arrayTotal = cartArray.map(e => e.product.price * e.quantity)
        const total = arrayTotal.length ? arrayTotal.reduce((a, b) => a + b) : 0
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={wrapper}>
                    <ScrollView style={main}>
                        {
                            cartArray.map(product11 => (
                                <View style={product}>
                                    <Image source={{ uri: `${url}${product11.product.images[0]}` }} style={productImage} />
                                    <View style={mainRight}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <Text style={txtName}>{toTitleCase(product11.product.name)}</Text>
                                            <TouchableOpacity onPress={() => { this.removeProduct(product11.product.id) }}>
                                                <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={txtPrice}>{product11.product.price}$</Text>
                                        </View>
                                        <View style={productController}>
                                            <View style={numberOfProduct}>
                                                <TouchableOpacity onPress={() => { this.incrQuantity(product11.product.id) }}>
                                                    <Text>+</Text>
                                                </TouchableOpacity>
                                                <Text>{product11.quantity}</Text>
                                                <TouchableOpacity onPress={() => { this.decrQuantity(product11.product.id) }}>
                                                    <Text>-</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity style={showDetailContainer}>
                                                <Text style={txtShowDetail}>Show Details</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                    <TouchableOpacity style={checkoutButton}>
                        <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
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
        fontSize: 20,
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});