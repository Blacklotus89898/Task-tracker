import { useContext, useState } from "react";
import MyContext from "../context/MyContext";

export default function Home() {
    const { contextValue } = useContext(MyContext);
    return (
        <>
            <div> Welcome to home!!!</div>
            <h3>Total task: {contextValue.length}</h3>
            <h3>Total task: {contextValue.filter((t) => t.status == "done").length}</h3>
        </>
    )
}