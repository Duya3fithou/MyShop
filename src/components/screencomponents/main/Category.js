import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ImageBackground } from 'react-native';
const { height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import little from '../../../Images/temp/little.jpg';
import maxi from '../../../Images/temp/maxi.jpg';
import party from '../../../Images/temp/party.jpg';




export default class Category extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Swiper>
                        <ImageBackground source={little} style={styles.imageStyle}>
                            <Text style={styles.categoryTitle}>
                                Little Dress
                            </Text>
                        </ImageBackground>
                        <ImageBackground source={maxi} style={styles.imageStyle} >
                            <Text style={styles.categoryTitle}>
                                Maxi Dress
                            </Text>
                        </ImageBackground>
                        <ImageBackground source={party} style={styles.imageStyle} >
                            <Text style={styles.categoryTitle}>
                                Party Dress
                            </Text>
                        </ImageBackground>
                    </Swiper>
                </View>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.27,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10, paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        flex: 4,
    },
    categoryTitle: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    }
});