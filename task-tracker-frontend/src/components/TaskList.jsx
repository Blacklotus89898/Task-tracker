import MyContext from "../context/MyContext";
import { useContext, useState } from "react";
import "./myStyle.css";
import "./TaskList.css"
import Task from "./task.jsx";

function TaskList() {
  const  {contextValue, updateContextValue } = useContext(MyContext);

  // implementing drag and drop
  // const [draggedItem, setDraggedItem] = useState(null); 
  // const [isDragging, setIsDragging] = useState(false);

  // const handleDragStart = (e, index) => {
  //   setDraggedItem(contextValue[index]);
  //   e.dataTransfer.effectAllowed = 'move';
  //   e.dataTransfer.setData("text/plain", index);
  //   setIsDragging(true);
  // }

  // const handleDragOver = (index) => {
  //   const draggeOverItem = contextValue[index]; //old value

  //   if (draggedItem === draggeOverItem) return;

  //   const newList = contextValue.filter((item) => item !== draggedItem);
  //   newList.splice(index, 0, draggedItem);
  //   updateContextValue(newList);
  // }

  // const handleDragEnd = () => {
  //   setDraggedItem(null);
  //   setIsDragging(false);
  // }

  return (
    <>
      <h1 className="text-5xl px-8 py-4">Todos </h1>
      <ul>
        {contextValue.length != 0 ? 
        (
          contextValue.map((item, index) => (
            <Task index={index} item={item} key={index} 
            // className={`draggable-item ${isDragging ? 'dragging' : ''}`}
            // onDragOver={() => handleDragOver(index)}
            // onDragStart={(e) => handleDragStart(e, index)}
            // onDragEnd={handleDragEnd}
            // draggable="true"
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
