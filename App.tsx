import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProviderBanco from './src/Providers/ProviderBanco';
import Navegacion from './src/Componentes/Navegacion';

export default function App() {
  return (

       <ProviderBanco>
  <Navegacion/>
     </ProviderBanco>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
