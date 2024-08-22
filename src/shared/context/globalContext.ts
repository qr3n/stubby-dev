import {createContext, Dispatch, SetStateAction} from "react";
import {WebAppUser} from "@vkruglikov/react-telegram-web-app";

export interface IGlobalContext {
    balance: number | null,
    setBalance: Dispatch<SetStateAction<number | null>>,

    energy: number | null,
    setEnergy: Dispatch<SetStateAction<number | null>>,

    user: WebAppUser | undefined,
}

export const GlobalContext = createContext<IGlobalContext>(null!)