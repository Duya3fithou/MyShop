import React, { Component } from 'react';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import {
  Text, View, Image, TouchableHighlight, StyleSheet, Dimensions, TextInput
} from 'react-native';

const { height } = Dimensions.get('window');


export default class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <View style={styles.ifIPX}></View>
        <View style={styles.wrapper}
        >
          <View style={styles.line1Header}>
            <TouchableHighlight
              onPress={() => this.props.navigation.toggleDrawer()}>

              <Image
                style={styles.iconStyle}
                source={require('./../Images/appIcon/ic_menu.png')}
              />
            </TouchableHighlight>
            <Text style={styles.titleStyle}>
              Wearing a Dress
        </Text>
            <Image
              style={styles.iconStyle}
              source={require('./../Images/appIcon/ic_logo.png')}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder='What do you want to buy'
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
    alignItems: 'center'
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
      height: 30,
      backgroundColor: '#fff',

    }, {
      height: 0
    }),

  },
})