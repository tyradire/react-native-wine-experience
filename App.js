import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import AndreScreen from './src/AndreScreen';
import ApothicScreen from './src/ApothicScreen';

export default function App() {
  return (
    
    <View style={styles.container}>
      {/* <AndreScreen/> */}
      <ApothicScreen/>
      <StatusBar translucent={true}/>
      {/* <Text style={styles.title}>
        A FAMILY TRADITION
      </Text>
      <Image style={styles.wineglass} 
        source={require('./images/wineglass.svg')}
      />
      <Text style={styles.notice}>
        As we are a licensed, bonded winery, you must be 21 or older to visit our App.
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#1a1a1a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
    fontFamily: 'Roboto',
    marginBottom: 14,
  },
  wineglass: {
    width: 367,
    height: 310,
    marginBottom: 172,
  },
  notice: {
    color: '#1a1a1a',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
    fontFamily: 'Roboto',
    marginHorizontal: 25,
  }
});
