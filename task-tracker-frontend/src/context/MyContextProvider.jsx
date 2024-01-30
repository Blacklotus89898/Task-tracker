import { useState } from "react";
import MyContext from "./MyContext";


// export const  MyContext = createContext({});

function MyContextProvider({children}) {
    const [contextValue, setContextValue] = useState(["koko"]);

    const updateContextValue = (val) => {
        setContextValue([...contextValue, val]);
    }


    return (
        <MyContext.Provider value={{contextValue, updateContextValue}}>
        {children}
        </MyContext.Provider>
    )
}


export default MyContextProvider