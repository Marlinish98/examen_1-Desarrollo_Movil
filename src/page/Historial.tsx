import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useContextBanco } from '../Providers/ProviderBanco'

export default function Historial() {

    const { datosPersona } = useContextBanco()

    return (

        <View style={{ padding: 20 }}>

            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
                Total de transacciones: {datosPersona.length}
            </Text>

            <FlatList
                data={datosPersona}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{
                        padding: 10,
                        borderBottomWidth: 1,
                        borderColor: '#eee'
                    }}>
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