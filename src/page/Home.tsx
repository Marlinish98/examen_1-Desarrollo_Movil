import {View,Text,Button,FlatList} from 'react-native';
import React from 'react';
import { useContextBanco } from '../Providers/ProviderBanco';

export default function Home() {

    const {
        datos,
        depositarSaldo,
        transacciones
    } = useContextBanco();

    return (

        <View style={{ padding: 20 }}>

            <Text>
                Bienvenido a tu App de Banco
            </Text>

            <Text>
                Saldo Actual:
                L.{datos.saldo}
            </Text>

            <Button
                title='Depositar L.500'
                onPress={depositarSaldo}
            />

            <FlatList
                data={transacciones}
                renderItem={({ item }) => (
                    <Text>{item}</Text>
                )}
            />

        </View>
    );
}