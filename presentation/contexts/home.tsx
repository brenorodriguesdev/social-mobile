import React, { createContext, useState } from "react";
import { InviteModel } from "../../domain/models/invite";

interface HomeContextProps {
    menuIndex: number
    setMenuIndex: (menuIndex: number) => void
    invites: InviteModel[],
    setInvites: (invites: InviteModel[]) => void
    removeInvite: (id: number) => void
    countNotification: number
    setCountNotification: (countNotification: number) => void
}
const HomeContext = createContext<HomeContextProps>({} as HomeContextProps)

function HomeProvider({ children }: any) {

    const [countNotification, setCountNotification] = useState(0)
    const [menuIndex, setMenuIndex] = useState(0)
    const [invites, setInvites] = useState<InviteModel[]>([])

    const removeInvite = (id: number) => {
        const nowInvites = invites.filter(x => x.id != id)
        setInvites(nowInvites)
    }

    return (
        <HomeContext.Provider value={{ menuIndex, setMenuIndex, invites, setInvites, removeInvite, countNotification, setCountNotification }}>
            {children}
        </HomeContext.Provider>
    )
}


export { HomeContext, HomeProvider }