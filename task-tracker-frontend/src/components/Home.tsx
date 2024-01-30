import { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Home() {
    const {contextValue, _} = useContext(MyContext);
    return (
        <>
            <div> Welcome to home!!!</div>
            <p>The value of the context: {contextValue}</p>
            
        </>
    )
}