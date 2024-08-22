import {PropsWithChildren, useEffect, useState} from "react";
import {GlobalContext} from "@/shared";
import {useQuery} from "react-query";
import {api} from "@/shared";
import {useInitData, WebAppUser} from "@vkruglikov/react-telegram-web-app";

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

    const { data: balanceData, isSuccess: isBalanceFetchSuccess } = useQuery({
        queryFn: async () => api.get(`/balance/${user?.id}`),
        queryKey: ['balance']
    })

    useEffect(() => {
        if (isBalanceFetchSuccess) setBalance(balanceData.data)
    }, [isBalanceFetchSuccess]);

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