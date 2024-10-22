import {createContext, Dispatch, SetStateAction} from "react";
import {WebAppUser} from "@vkruglikov/react-telegram-web-app";

interface IUser {
    balance: number,
    refs: string,
    claimed: string,
    wallet: string,
    refs_tags: string,
    is_claiming_now: boolean,
    claiming_now_count: number
}

export interface IGlobalContext {
    balance: number | null,
    setBalance: Dispatch<SetStateAction<number | null>>,

    energy: number | null,
    setEnergy: Dispatch<SetStateAction<number | null>>,

    user: WebAppUser | undefined,

    claimed: string[],
    setClaimed: Dispatch<SetStateAction<string[]>>,

    refs: string[],

    userData: IUser | null,
    setUserData: Dispatch<SetStateAction<IUser | null>>
}

export const GlobalContext = createContext<IGlobalContext>(null!)