import { createContext } from "react";
import { DatosPersonas } from "../Modelos/DatosPersona";

export const contextBanco = createContext({
    datosPersona:[] as DatosPersonas[],
    saldo:0,
    depositarDinero: () => {},
    transferirSaldo: (monto:number,nombre:string,Ncuenta:number) => {},
    retirarDinero:()=>{}
});