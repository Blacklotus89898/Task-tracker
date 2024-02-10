import MyContext from "../context/MyContext";
import { useContext, useState, useRef } from "react";
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

  const di = useRef(null); //useRef instead
  const doi = useRef(null); //useRef instead

  const handleDragStart = (index) => {
    di.current  = index;
    console.log("index1", index)
  }

  const handleDragOver = (index) => {
    doi.current = index;
    console.log("doi", doi.current)
    console.log("di", di.current)

    // const oldList = contextValue;
    // const draggeOverItem = contextValue[index]; //old value
    // const dO = dI.current;

    // if (di.current == doi.current) {
    //   console.log("no change");
    //   setNewList(contextValue);
    //   return;
    // }

    // console.log("Update");
    // // setNewList(contextValue.filter((item) => item != di.current));
 
    // console.log("list:", contextValue);
    // console.log("DI item", item);

    // const ll = [...contextValue];
    // ll.splice(di.current, 1);
    // console.log("New klist1", ll);
    // ll.splice(di.current, 0, item);
    // console.log("New list2", ll);
    // setNewList(ll);
    // console.log("New list2", newList);
  }

  const handleDragEnd = () => {
    const l1 = [...contextValue];
    const dii = l1[di.current];
    console.log("from to ", di.current, doi.current);
    l1.splice(di.current, 1);

    console.log("S1", l1);
    // console.log("S1", l2);

    l1.splice(doi.current, 0,  dii);
    console.log("S2",l1);
    doi.current = null;
    di.current = null;
    // updateContextValue(contextValue); //update at the end of drag
    updateContextValue(l1); //update at the end of drag
    // setDraggedItem(null);
    // di.current = null;
    // doi.current = null;

    // setNewList(contextValue);

    // setIsDragging(false);
  }

  return (
    <>
      <h1 className="text-5xl px-8 py-4">Todos </h1>
      <ul>
        {contextValue.length != 0 ? 
        (
          contextValue.map((item, index) => (
            <Task index={index} item={item} key={index} 
            // onDragOver={() => handleDragOver(index)}
            // onDragStart={(e) => handleDragStart(e, index)}
            // onDragEnd={handleDragEnd}
            // draggable="true"
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
