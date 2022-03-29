import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Andre from './Screens/Andre';
import Apothic from './Screens/Apothic';
import LaMarca from './Screens/LaMarca';
import Main from './Screens/Main';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName='Andre'>
        {/* <Drawer.Screen name='Main' component={Main} /> */}
        <Drawer.Screen name='Andre' component={Andre} />
        <Drawer.Screen name='Apothic' component={Apothic} />
        <Drawer.Screen name='LaMarca' component={LaMarca} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
