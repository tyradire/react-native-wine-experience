import React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

function Main({ navigation }) {

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return(
  <View style={styles.container}>
    <Text style={styles.title}>A FAMILY TRADITION</Text>
    <Image 
    style={styles.wineglass} 
    source={require('../images/wineglass.png')}
    />
    <Text style={styles.notice}>As we are a licensed, bonded winery, you must be 21 or older to visit our App.</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#1a1a1a',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 23,
    fontFamily: 'Roboto_300Light',
    marginTop: 180,
  },
  wineglass: {
    width: 367,
    height: 310,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 14,
  },
  notice: {
    color: '#1a1a1a',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Roboto_400Regular',
    marginHorizontal: 25,
    marginTop: 80,
  }
});

export default Main;