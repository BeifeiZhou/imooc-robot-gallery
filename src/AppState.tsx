import React, { useState } from 'react'

interface AppStateValue {
    username: string;
    shoppingCart: { items: { id: number, name: string }[] }
}

const defaultContextVaule: AppStateValue = {
    username: "testUser",
    shoppingCart: { items: [] }
}
export const appContext = React.createContext(defaultContextVaule)
export const appSetStateContext = React.createContext<
    React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);
export const AppSateProvider: React.FC = (props) => {
    const [state, setState] = useState(defaultContextVaule)
    return <appContext.Provider value={state}>
        <appSetStateContext.Provider value={setState}>
            {props.children}
        </appSetStateContext.Provider>
    </appContext.Provider>
}