import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../page/Home';
import Historial from '../page/Historial';
import Transferencia from '../page/Transferencia';
import ProviderBanco from '../Providers/ProviderBanco';

export default function Navegacion() {

  const tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
        <tab.Navigator>
        <tab.Screen name="Home" component={Home} />
        <tab.Screen name="Transferencia" component={Transferencia} />
        <tab.Screen name="Historial" component={Historial} />
        </tab.Navigator>

      </NavigationContainer>

  )
}