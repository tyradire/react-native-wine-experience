import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

function Header({ navigation, year, title }) {
  return(
    <ImageBackground source={require('../images/pear-bg.jpg')} style={styles.background}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.buttonOverlay}>
        <FontAwesome5 name='bars' style={styles.button} />  
      </TouchableOpacity>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleYear}>{year}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: 350,
    resizeMode: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  title: {
    marginTop: 3,
    color: '#FFFFFF',
    textAlign: 'left',
    fontSize: 50,
    lineHeight: 59,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
});

export default Header;