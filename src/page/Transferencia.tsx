import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useContextBanco } from '../Providers/ProviderBanco'

export default function Transferencia() {

    const { transferirSaldo } = useContextBanco()

    const [nombre, setNombre] = useState('')
    const [monto, setMonto] = useState('')
    const [ncuenta, setNcuenta] = useState('')

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Número de cuenta'
                keyboardType='numeric'
                style={styles.input}
                value={ncuenta}
                onChangeText={setNcuenta}
            />

            <TextInput
                placeholder='Nombre'
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                placeholder='Monto'
                keyboardType='numeric'
                style={styles.input}
                value={monto}
                onChangeText={setMonto}
            />

            <Button
                title='Transferir'
                onPress={() =>
                    transferirSaldo(
                        Number(monto),
                        nombre,
                        Number(ncuenta)
                    )
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fafafa'
    }
})