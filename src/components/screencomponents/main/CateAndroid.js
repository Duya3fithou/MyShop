import React, { Component } from 'react';
import {
    View, Text, Dimensions, Image, StyleSheet, ImageBackground,
    TouchableOpacity,
} from 'react-native';
const { height, width } = Dimensions.get('window');
import { withNavigation } from 'react-navigation';
import Swiper from "react-native-web-swiper";

const url = 'http://192.168.1.11/app/images/type/';

class CateAndroid extends Component {
    showDetails = (_id) => {
        this.props.navigation.navigate('ListProduct');
    }
    gotoListProduct = (ListCate) => {
        this.props.navigation.navigate('ListProduct', { ListCate: ListCate});
      };
    render() {
        const { types } = this.props;
        return (
            <View style={styles.wrapper} >
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Swiper style={{ flex: 1 }} initialPage={0}>
                        {types.map(e => (
                            <TouchableOpacity
                               onPress={() => this.gotoListProduct(e)}
                                key={e.id}>
                                <ImageBackground
                                    source={{ uri: `${url}${e.image}` }}
                                    style={styles.imageStyle}>
                                    <Text style={styles.categoryTitle}>{e.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
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