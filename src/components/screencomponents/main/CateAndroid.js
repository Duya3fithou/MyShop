import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, ImageBackground, 
     TouchableOpacity, Platform } from 'react-native';
const { height, width } = Dimensions.get('window');
import little from '../../../Images/temp/little.jpg';
import maxi from '../../../Images/temp/maxi.jpg';
import party from '../../../Images/temp/party.jpg';
import { withNavigation } from 'react-navigation';
import Swiper from "react-native-web-swiper";




class CateAndroid extends Component {
    showDetails = (_id) => {
        this.props.navigation.navigate('ListProduct');
    }
    render() {
            return (
                <View style={styles.wrapper} >
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                    </View>
                    <View style={styles.imageWrapper}>
                        <Swiper style={{ flex: 1 }} initialPage={0}>
                            <TouchableOpacity onPress={() => this.showDetails(1)} >
                                <ImageBackground source={little} style={styles.imageStyle}>
                                    <Text style={styles.categoryTitle}>
                                        Little Dress
                            </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.showDetails(1)}>
                                <ImageBackground source={maxi} style={styles.imageStyle} >
                                    <Text style={styles.categoryTitle}>
                                        Maxi Dress
                            </Text>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.showDetails(1)}>
                                <ImageBackground source={party} style={styles.imageStyle} >
                                    <Text style={styles.categoryTitle}>
                                        Party Dress
                            </Text>
                                </ImageBackground>
                            </TouchableOpacity>

                        </Swiper>
                    </View>
                </View>


            );
        }
       
    }
export default withNavigation(CateAndroid);
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
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