import { createContext } from "react";
import { DatosPersonas } from "../Modelos/DatosPersona";

export const contextBanco = createContext({
    datos: {} as DatosPersonas,
    transacciones: [] as string[],
    depositarSaldo: () => {},
    transferirSaldo: (monto:number,nombre:string,Ncuenta:number) => {},
});