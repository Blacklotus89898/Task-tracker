import MyContext from "../context/MyContext";
import { useContext, useState, useRef } from "react";
import "./myStyle.css";
import "./TaskList.css"
import Task from "./task.jsx";

function TaskList() {
  const  {contextValue, updateContextValue } = useContext(MyContext);


  return (
    <>
      <h1 className="text-5xl px-8 py-4">Todos </h1>
      <ul>
        {contextValue.length != 0 ? 
        (
          contextValue.map((item, index) => (
            <Task index={index} item={item} key={index} 
            ></Task>
          ))
        ) : (
          <div>No task to render</div>
        )}
      </ul>
    </>
  );
}

export default TaskList;
