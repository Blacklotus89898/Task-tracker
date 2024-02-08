import { useContext } from "react";
import MyContext from "../context/MyContext";

export default function Home() {
    const { contextValue } = useContext(MyContext);
    return (
        <>
            <div className="text-center text-2xl p-16">
                <div> Welcome to home!!!</div>
                <h3>Total task: {contextValue.length}</h3>
                <h3>Task completed: {contextValue.filter((t) => t.status == "Done").length}</h3>
            </div>
        </>
    )
}