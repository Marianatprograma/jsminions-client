import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)

    const value = { 
        showModal,
        setShowModal,

    }

     return(
        

        <GlobalContext.Provider value= {value}>
            {children}
        </GlobalContext.Provider>
     )
}

