import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import Header from "../Components/Header";
import background from '../images/pear-bg.jpg';

function Andre({ navigation }) {

  return(
      <View style={styles.header}>
        <Header navigation={navigation} year='SPRING 1961' title='ANDRÉ' background={background} />
        <View style={styles.winesLine}>
          <View style={styles.winesBackground}></View>
          <View style={styles.wineWrapper}>
            <Image source={require('../images/LaMarca.png')} style={[styles.wine, styles.wineLeft]}></Image>
            <Text style={styles.wineSubtitle}>LA MARCA</Text>
          </View>
          <View style={styles.wineWrapper}>
            <Image source={require('../images/Andre.png')} style={[styles.wine, styles.selected]}></Image>
            <Text style={styles.wineSubtitle}>ANDRÉ</Text>
          </View>
          <View style={styles.wineWrapper}>
            <Image source={require('../images/Apothic.png')} style={[styles.wine, styles.wineRight]}></Image>
            <Text style={styles.wineSubtitle}>APOTHIC</Text>
          </View>  
        </View>
        <View style={styles.wineBottomBlock}>
          <View style={styles.wineInfo}>
            <View style={styles.wineInfoLeft}>
              <Text style={styles.wineInfoTitle}>Origin of wine</Text>
              <Text style={styles.wineInfoContent}>Coorg, IN</Text>
            </View>
            <View style={styles.wineInfoRight}>
              <Text style={styles.wineInfoTitle}>Tastes like...</Text>
              <Text style={styles.wineInfoContent}>Citrus, Fresh, Pear</Text>
            </View>
          </View>
          <Text style={styles.wineDescription}>A light-bodied classic with a crisp, bright finish, Barefoot Pinot Grigio offers all the flavors of tart green apples with fresh, white peaches. Accented with floral blossoms and citrus aromas, our Pinot Grigio pairs perfectly with traditional favorites like poultry, pasta, and pizza.</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    height: 350,
    resizeMode: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  winesBackground: {
    position: 'absolute',
    justifyContent: 'center',
    top: 340,
    width: 240,
    height: 240,
    backgroundColor: '#D04D3D',
    borderRadius: 120,
    zIndex: 1,
    elevation: 1,
    opacity: .1,
  },
  buttonOverlay: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 56,
    marginLeft: 30,
  },
  button: {
    fontSize: 23,
    color: '#FFF1F1',
  },
  titleWrapper: {
    marginTop: 56,
    marginLeft: 49,
  },
  titleYear: {
    color: '#8A140D',
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  title: {
    marginTop: 3,
    color: '#8A140D',
    textAlign: 'left',
    fontSize: 50,
    lineHeight: 59,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  winesLine: {
    position: 'absolute',
    top: 0,
    bottom: 50,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wineWrapper: {
    
  },
  wine: {
    width: 60,
    height: 200,
    zIndex: 10,
    elevation: 10,
    resizeMode: 'stretch',
  },
  wineLeft: {
    marginLeft: 15,
    transform: [{ rotate: '-9deg' }],
  },
  wineRight: {
    marginLeft: 25,
    transform: [{ rotate: '9deg' }],
  },
  selected: {
    width: 113,
    height: 378,
    zIndex: 1,
    elevation: 1,
    transform: [{ rotate: '-4deg' }],
    marginHorizontal: 20,
  },
  wineSubtitle: {
    color: '#D13F41',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '300',
    fontFamily: 'Roboto',
    marginTop: 10,
  },
  wineInfo: {
    flexDirection: "row",
    marginBottom: 20,
  },
  wineInfoLeft: {
    flex: .3,
  },
  wineInfoRight: {
    flex: .4,
  },
  wineInfoTitle: {
    color: '#1A1A1A',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  wineInfoContent: {
    color: '#1A1A1A',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  wineDescription: {
    color: '#1A1A1A',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  wineBottomBlock: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default Andre;