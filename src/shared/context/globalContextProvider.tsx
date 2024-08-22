import {useExpand, useInitData, WebAppUser} from "@vkruglikov/react-telegram-web-app";
import {PropsWithChildren, useEffect, useState} from "react";
import {GlobalContext} from "@/shared";
import {api} from "@/shared";

export const GlobalContextProvider = (props: PropsWithChildren) => {
    const [balance, setBalance] = useState<number | null>(null);
    const [energy, setEnergy] = useState<number | null>(1000);
    const [initData] = useInitData()
    const [user, setUser] = useState<WebAppUser>()
    const [_, expand] = useExpand()

    useEffect(() => {
        expand()
    }, [expand]);

    useEffect(() => {
        if (initData) {
            setUser(initData.user)
        }
    }, [initData]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (energy) {
                if (energy < 1000) {
                    setEnergy(prev => prev! += 1)
                }
            }
        }, 1000 * 14.4)

        return () => clearInterval(interval)
    }, [energy])

    useEffect(() => {
        if (user) {
            api.get(`/balance/${user?.id}`).then(r => {
                setBalance(r.data)
                console.log(r.data)
                console.log(r)
            })
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