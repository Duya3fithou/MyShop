import React, { Component } from 'react';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
  Text, View, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput
} from 'react-native';

const { height } = Dimensions.get('window');


export default class HeaderComponent extends Component {
  goBack() {
    this.props.navigation.navigate('Main');
  }
  
  render() {
    return (
      <View>
        <View style={styles.ifIPX}></View>
        <View style={styles.wrapper}
        >
          <View style={styles.line1Header}>
            <TouchableOpacity
              onPress={() => this.props.navigation.toggleDrawer()}>

              <Image
                style={styles.iconStyle}
                source={require('./../Images/appIcon/ic_menu.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.goBack.bind(this)}>
              <Text style={styles.titleStyle}>
                Wearing a Dress
        </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.goBack.bind(this)} >
              <Image
                style={styles.iconStyle}
                source={require('./../Images/appIcon/ic_logo.png')}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder='What do you want to buy'
            underlineColorAndroid='transparent'

          >

          </TextInput>
        </View>
      </View>

    );
  }
}
let styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: '#34B089',
    padding: 10,
    justifyContent: 'space-around'
  },
  line1Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    height: height / 23,
    backgroundColor: '#FFF',
    paddingLeft: 10,
    alignItems: 'center',
    paddingVertical: 0
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  titleStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 18

  },
  ifIPX: {
    ...ifIphoneX({
      height: 17,
      backgroundColor: '#34B089',

    }, {
      height: 0
    }),

  },
})