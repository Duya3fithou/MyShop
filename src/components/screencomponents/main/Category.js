import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import {withNavigation} from 'react-navigation';
import CateAndroid from './CateAndroid';
const url = 'http://192.168.1.13/app/images/type/';

class Category extends Component {
  gotoListProduct = ListCate => {
    this.props.navigation.navigate('ListProduct', ListCate);
  };
  render() {
    const {types} = this.props;
    if (Platform.OS === 'android') {
      return <CateAndroid types={types} />;
    } else
      return (
        <View style={styles.wrapper}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Swiper>
              {types.map(e => (
                <TouchableOpacity
                  onPress={() => this.gotoListProduct(e)}
                  key={e.id}>
                  <ImageBackground
                    source={{uri: `${url}${e.image}`}}
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
export default withNavigation(Category);
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.27,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 4,
  },
  categoryTitle: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#9A9A9A',
  },
});
