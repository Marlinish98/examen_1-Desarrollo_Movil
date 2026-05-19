import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useContextBanco } from '../Providers/ProviderBanco'

export default function Home() {

    const {
        saldo,
        retirarDinero,
        depositarDinero,
    } = useContextBanco()

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Bienvenido a tu App de Banco
            </Text>

            <Text style={styles.saldo}>
                Saldo Actual: L. {saldo}
            </Text>

            <Button
                title='Depositar L.500'
                onPress={depositarDinero}
            />
            <Button
                title='Retirar L.200'
                onPress={retirarDinero}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    saldo: {
        marginVertical: 10
    }
})