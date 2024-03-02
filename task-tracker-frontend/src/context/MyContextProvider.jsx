import { useState } from "react";
import MyContext from "./MyContext";


// export const  MyContext = createContext({});

function MyContextProvider({children}) {
    const [contextValue, setContextValue] = useState([{title:"Koko", status: "lol"}, {title:"k2", status: "lol"}]);

    const updateContextValue = (val) => {
        setContextValue(val);
    }


    return (
        <MyContext.Provider value={{contextValue, updateContextValue}}>
        {children}
        </MyContext.Provider>
    )
}


export default MyContextProvider