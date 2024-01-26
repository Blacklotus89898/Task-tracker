import { useState } from "react";
import MyContext from "./MyContext";

function MyContextProvider({children}) {
    const [contextValue, setContextValue] = useState();
    const updateContextValue = (val) => {
        setContextValue(val);
    }

    return (
        <MyContext.Provider value={{contextValue, updateContextValue}}>
        {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;