import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Vista } from '../Modelos/Vista';
import { DatosPersonas } from '../Modelos/DatosPersona';
import { contextBanco } from '../Context/ContextBanco';

export default function ProviderBanco(props: Vista) {

    const [datos, setDatos] =useState<DatosPersonas>({saldo: 10000});

    const [transacciones, setTransacciones] =useState<string[]>([]);

    function depositarSaldo() {
        setDatos({
            saldo: datos.saldo + 500
        });

        setTransacciones([
            ...transacciones,
            "Deposito realizado de L.500"
        ]);
    }

    function transferirSaldo(monto:number, nombre:string, Ncuenta:number) {

        if (monto > datos.saldo) {

            alert(
                "Saldo insuficiente pa completar la transacción"
            );

            return;
        }

        setDatos({
            saldo: datos.saldo - monto
        });

        setTransacciones([
            ...transacciones,
            `Transferencia de L.${monto} a ${nombre}`
        ]);

        alert("Transferencia exitosa");
    }

    return (
        <contextBanco.Provider
            value={{datos,transacciones,depositarSaldo,transferirSaldo,}}>
            {props.children}
        </contextBanco.Provider>
    );
}

export function useContextBanco() {
    return useContext(contextBanco);
}