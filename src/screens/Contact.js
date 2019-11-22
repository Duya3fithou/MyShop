import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import map from '../Images/appIcon/map.png'

import phoneIcon from '../Images/appIcon/phone.png';
import mailIcon from '../Images/appIcon/mail.png';
import messageIcon from '../Images/appIcon/message.png';
import locationIcon from '../Images/appIcon/location.png';

export default class Contact extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Contact';
        let tabBarIcon = () => (

            <Image
                source={require('./../Images/appIcon/contact0.png')}
                style={{ width: 26, height: 26, }}
            />

        );
        return { tabBarLabel, tabBarIcon };
    }

    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText
        } = styles;
        return (
            <View style={{ flex: 1 }}>

                <HeaderComponent {...this.props} />

                <View style={wrapper}>
                    <View style={mapContainer}>
                        <Image
                            style={{ flex: 1, alignSelf: 'stretch', width: undefined }} source={map}
                        />
                    </View>
                    <View style={infoContainer}>
                        <View style={rowInfoContainer}>
                            <Image source={locationIcon} style={imageStyle} />
                            <Text style={infoText}>96 Định Công - Hoàng Mai - HN</Text>
                        </View>
                        <View style={rowInfoContainer}>
                            <Image source={phoneIcon} style={imageStyle} />
                            <Text style={infoText}>(+84) 0987012434</Text>
                        </View>
                        <View style={rowInfoContainer}>
                            <Image source={mailIcon} style={imageStyle} />
                            <Text style={infoText}>duya3fithou@gmail.com</Text>
                        </View>
                        <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                            <Image source={messageIcon} style={imageStyle} />
                            <Text style={infoText}>(+84) 0974946036</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#F6F6F6' },
    mapStyle: {
        width: width - 40,
        height: 230,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: '#FFF',
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '500'
    }
});