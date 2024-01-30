import MyContext from "../context/MyContext";
import { useContext } from "react";

function TaskList() {
    const {contextValue, updateContextValue} = useContext(MyContext);

    return (
        <>
        <h1>Todos </h1>
        <ul>
            {
                contextValue.map((item, index) => (
                    // console.log(item);
                    <li key={index}>Value: {item}</li>
                ))
            }
        </ul>
        </>
    )
}

export default TaskList;