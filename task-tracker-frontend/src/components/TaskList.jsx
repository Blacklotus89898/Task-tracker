import MyContext from "../context/MyContext";
import { useContext } from "react";
import './myStyle.css'

function TaskList() {
    const {contextValue, updateContextValue} = useContext(MyContext);

    return (
        <>
        <h1>Todos </h1>
        <ul>
            {
                contextValue.map((item, index) => (
                    // console.log(item);
                    
                    <li key={index} className="border-8 border-red-300 ">
                        <div className="flex justify-between items-center">
                    <div className="px-8">
                        Task name: {item} 
                    </div>

                    <div className="text-right">
                    <button className="button ">Delete</button>
                    <button className="button bg-red-200">View</button>
                    </div>
                        </div>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default TaskList;