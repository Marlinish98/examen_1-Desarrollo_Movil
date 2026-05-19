import React, { useContext, useState } from 'react'
import { Vista } from '../Modelos/Vista'
import { DatosPersonas } from '../Modelos/DatosPersona'
import { contextBanco } from '../Context/ContextBanco'

export default function ProviderBanco(props: Vista) {

    const [saldo, setSaldo] = useState(10000)

    const [datosPersona, setDatosPersonas] = useState<DatosPersonas[]>([])

    function depositarDinero() {

        setSaldo(prev => prev + 500)

        const nuevaTransaccion: DatosPersonas = {
            id: Date.now(),
            ncuenta: 12345678,
            nombre: "Marlon Martinez",
            motivo:"Deposito en mi cuenta",
            monto: 500
        }

        setDatosPersonas(prev => [
            ...prev,
            nuevaTransaccion
        ])
    }

     function retirarDinero() {

        setSaldo(prev => prev - 200)

        const nuevaTransaccion: DatosPersonas = {
            id: Date.now(),
            ncuenta: 12345678,
            nombre: "Marlon Martinez",
            motivo:"Retiro de mi cuenta",
            monto: 200
        }

        setDatosPersonas(prev => [
            ...prev,
            nuevaTransaccion
        ])
    }

  function transferirSaldo(monto: number, nombre: string, Ncuenta: number) {

    if (monto > saldo) {
        alert("Saldo insuficiente para completar la transacción")
        return false
    }

    setSaldo(prev => prev - monto)

    const nuevaTransaccion = {
        id: Date.now(),
        ncuenta: Ncuenta,
        nombre,
        monto,
        tipo: "Transferencia"
    }

    setDatosPersonas(prev => [...prev, nuevaTransaccion])

    alert("Transferencia exitosa")

    return true
}

    return (
        <contextBanco.Provider
            value={{
                saldo,
                datosPersona,
                retirarDinero,
                depositarDinero,
                transferirSaldo
            }}
        >
            {props.children}
        </contextBanco.Provider>
    )
}

export function useContextBanco() {
    return useContext(contextBanco)
}