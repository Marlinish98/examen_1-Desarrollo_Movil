import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import { useContextBanco } from '../Providers/ProviderBanco'

export default function Home() {

    const {
        saldo,
        retirarDinero,
        depositarSaldo,
    } = useContextBanco()

    return (

        <View style={{ padding: 20 }}>

            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                Bienvenido a tu App de Banco
            </Text>

            <Text style={{ marginVertical: 10 }}>
                Saldo Actual: L. {saldo}
            </Text>

            <Button
                title='Depositar L.500'
                onPress={depositarSaldo}
            />
            <Button
                title='Retirar L.200'
                onPress={retirarDinero}
            />

        </View>
    )
}