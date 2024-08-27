import {useExpand, useInitData, WebAppUser} from "@vkruglikov/react-telegram-web-app";
import {PropsWithChildren, useEffect, useState} from "react";
import {GlobalContext} from "@/shared";
import {api} from "@/shared";

interface IWebsocketMessage {
    energy: number
}

export const GlobalContextProvider = (props: PropsWithChildren) => {
    const [balance, setBalance] = useState<number | null>(null);
    const [energy, setEnergy] = useState<number | null>(0);
    const [claimed, setClaimed] = useState<string[]>([]);
    const [refs, setRefs] = useState<string[]>([]);
    const [initData] = useInitData()
    const [user, setUser] = useState<WebAppUser>()
    const [_, expand] = useExpand()

    useEffect(() => {
        const ws = new WebSocket(`wss://stubbybot.ru/energy?user_id=${user?.id}`)

        ws.onmessage = (message) => {
            const decoded: IWebsocketMessage = JSON.parse(message.data)

            setEnergy(decoded.energy)
        }

        return () => ws.close()
    }, [user?.id]);

    useEffect(() => {
        expand()
    }, [expand]);

    useEffect(() => {
        if (initData) {
            setUser(initData.user)
        }
    }, [initData]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (energy) {
    //             if (energy < 1000) {
    //                 setEnergy(prev => prev! += 1)
    //             }
    //         }
    //     }, 1000 * 7.2)
    //
    //     return () => clearInterval(interval)
    // }, [energy])

    useEffect(() => {
        if (user) {
            api.get(`/balance/${user?.id}`).then(r => {
                setBalance(r.data)
            })

            api.get(`/claimed/${user?.id}`).then(r => {
                setClaimed(r.data)
            })

            api.get(`/refs/${user?.id}`).then(r => {
                setRefs(r.data)
            })
        }
    }, [user])

    return (
        <GlobalContext.Provider value={{
            user,
            balance,
            setBalance,
            energy,
            setEnergy,
            claimed,
            setClaimed,
            refs
        }}>
            { props.children }
        </GlobalContext.Provider>
    )
}