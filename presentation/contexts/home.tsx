import React, { createContext, useState } from "react";

interface HomeContextProps {
    menuIndex: number
    setMenuIndex: (menuIndex: number) => any
}
const HomeContext = createContext<HomeContextProps>({} as HomeContextProps)

function HomeProvider({ children }: any) {

    const [menuIndex, setMenuIndex] = useState(0)

    return (
        <HomeContext.Provider value={{ menuIndex, setMenuIndex }}>
            {children}
        </HomeContext.Provider>
    )
}


export { HomeContext, HomeProvider }