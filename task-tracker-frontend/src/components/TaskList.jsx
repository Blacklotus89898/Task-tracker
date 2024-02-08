import MyContext from "../context/MyContext";
import { useContext } from "react";
import "./myStyle.css";
import Task from "./task.jsx";

function TaskList() {
  const { contextValue } = useContext(MyContext);

  return (
    <>
      <h1>Todos </h1>
      <ul>
        {contextValue.length != 0 ? (
          contextValue.map((item, index) => (
            <Task index={index} item={item} key={index}></Task>
          ))
        ) : (
          <div>No task to render</div>
        )}
      </ul>
    </>
  );
}

export default TaskList;
