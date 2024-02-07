import { useContext, useState } from "react";
import MyContext from "../context/MyContext";

export default function Home() {
    const {contextValue} = useContext(MyContext);
    return (
        <>
            <div> Welcome to home!!!</div>
            <h3>Total task: {contextValue.length}</h3>
            {/* <p>The value of the context: {contextValue.map((e, ) => { e.name})}</p> */}

        </>
    )
}