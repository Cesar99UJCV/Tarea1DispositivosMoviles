/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MiPantalla from './pantallas/MiPantalla';
import PantallaAdmiro from './pantallas/PantallaAdmiro';

const SwitchNavigator = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SwitchNavigator.Navigator>
        <SwitchNavigator.Screen name="MiPantalla" component={MiPantalla} />
        <SwitchNavigator.Screen name="PantallaAdmiro" component={PantallaAdmiro} />
      </SwitchNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;