import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../page/Home';
import Historial from '../page/Historial';
import Transferencia from '../page/Transferencia';

const Tab = createBottomTabNavigator();

export default function Navegacion() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Transferencias" component={Transferencia} />
        <Tab.Screen name="Historial" component={Historial} />
      </Tab.Navigator>
    </NavigationContainer>
  );
} 