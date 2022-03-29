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
      <Drawer.Navigator initialRouteName='Andre' screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#8A140D',
          opacity: .8,
        },
        drawerLabelStyle: {
          color: '#FFFFFF',
          fontFamily: 'Roboto',
          fontWeight: 'normal',
          fontSize: 30,
          height: 35,
        },
        drawerActiveBackgroundColor: 'transparent',
      }}
      >
        <Drawer.Screen name="&#8592;" component={Main} />
        <Drawer.Screen name='Andre' component={Andre} />
        <Drawer.Screen name='Apothic' component={Apothic} />
        <Drawer.Screen name='La Marca' component={LaMarca} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
