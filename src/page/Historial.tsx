import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useContextBanco } from '../Providers/ProviderBanco'

export default function Historial() {

    const { datosPersona } = useContextBanco()

    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                Total de transacciones: {datosPersona.length}
            </Text>

            <FlatList
                data={datosPersona}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>N° Cuenta: {item.ncuenta}</Text>
                        <Text>Nombre de la Cuenta: {item.nombre}</Text>
                        <Text>Monto: L. {item.monto}</Text>
                        <Text>{item.motivo}</Text>
                    </View>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
    }
})