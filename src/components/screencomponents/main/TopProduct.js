import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import sp1 from '../../../Images/temp/sp1.jpeg';
import sp2 from '../../../Images/temp/sp2.jpeg';
import sp3 from '../../../Images/temp/sp3.jpeg';
import sp4 from '../../../Images/temp/sp4.jpeg';


export default class TopProduct extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tittleWrapper}>
                    <Text style={styles.tittle}>TOP PRODUCT</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.productWrapper}>
                        <Image source={sp1}
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>
                            Product Name
                        </Text>
                        <Text style={styles.productPrice}>
                            300$
                        </Text>
                    </View>
                    <View style={styles.productWrapper}>
                        <Image source={sp2}
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>
                            Product Name
                        </Text>
                        <Text style={styles.productPrice}>
                            400$
                        </Text>
                    </View>
                    <View style={{ height: 10, width }} />

                    <View style={styles.productWrapper}>
                        <Image source={sp3}
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>
                            Product Name
                        </Text>
                        <Text style={styles.productPrice}>
                            200$
                        </Text>
                    </View>
                    <View style={styles.productWrapper}>
           
                        <Image source={sp4}
                            style={styles.productImage}
                        />
                        <Text style={styles.productName}>
                            Product Name
                        </Text>
                        <Text style={styles.productPrice}>
                            350$
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
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
