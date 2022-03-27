import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading'

import AndreScreen from './src/AndreScreen';
import ApothicScreen from './src/ApothicScreen';
import LaMarcaScreen from './src/LaMarcaScreen';
import MainScreen from './src/MainScreen';

export default function App() {

  return (
    <View style={styles.main}>
      <StatusBar translucent={true}/>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
})
