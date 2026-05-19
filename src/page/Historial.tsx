import React from 'react';

import {
    View,
    Text,
    FlatList
} from 'react-native';

import {
    useContextBanco
} from '../Providers/ProviderBanco';

export default function Historial() {

    const { transacciones } =
        useContextBanco();

    return (

        <View style={{ padding: 20 }}>

            <Text>
                Total de transacciones:
                {transacciones.length}
            </Text>

            <FlatList
                data={transacciones}
                renderItem={({ item }) => (
                    <Text>{item}</Text>
                )}
            />

        </View>
    );
}