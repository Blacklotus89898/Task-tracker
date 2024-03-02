import MyContext from "../context/MyContext";
import { useContext } from "react";
import "./myStyle.css";
import "./TaskList.css"
import Task from "./task.jsx";

function TaskList() {
  const  {contextValue } = useContext(MyContext);


  return (
    <>
      <h1 className="text-5xl px-8 py-4">Todos </h1>
      <ul>
        {contextValue.length != 0 ? 
        (
          contextValue.map((item, index) => (
            <Task index={index} item={item} key={index} 
            ></Task> //draggable a lot better tp use than the reorganizing the list
          ))
        ) : (
          <div>No task to render</div>
        )}
      </ul>
    </>
  );
}

export default TaskList;
