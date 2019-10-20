import React, { Component } from 'react';
import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get('window');
import bannerImage from '../../../Images/temp/banner.jpg';
import { withNavigation } from 'react-navigation';



class Collection extends Component {

    showDetails = (_id) => {
        this.props.navigation.navigate('ListProduct');
    }

    render() {


        return (
            <View style={styles.wrapper}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={styles.textStyle}>SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={styles.imageWrapper}
                    onPress={() => this.showDetails(1)}>
                    <View >
                        <Image source={bannerImage} style={styles.imageStyle} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

export default withNavigation(Collection);


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
        width: imageWidth
    },
    imageWrapper: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
