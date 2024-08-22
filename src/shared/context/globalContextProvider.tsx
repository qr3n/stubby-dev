import {useInitData, WebAppUser} from "@vkruglikov/react-telegram-web-app";
import {PropsWithChildren, useEffect, useState} from "react";
import {GlobalContext} from "@/shared";
import {api} from "@/shared";

export const GlobalContextProvider = (props: PropsWithChildren) => {
    const [balance, setBalance] = useState<number | null>(null);
    const [energy, setEnergy] = useState<number | null>(null);
    const [initData] = useInitData()
    const [user, setUser] = useState<WebAppUser>()

    useEffect(() => {
        if (initData) {
            setUser(initData.user)
        }
    }, [initData]);

    useEffect(() => {
        if (user) {
            api.get(`/balance/${user?.id}`).then(r => setBalance(r.data))
        }
    }, [user])

    return (
        <GlobalContext.Provider value={{
            user,
            balance,
            setBalance,
            energy,
            setEnergy
        }}>
            { props.children }
        </GlobalContext.Provider>
    )
}