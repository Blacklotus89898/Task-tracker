import MyContext from "../context/MyContext";
import { useContext, useState, useRef } from "react";
import "./myStyle.css";

function Task({ index, item }) {
  const { contextValue, updateContextValue } = useContext(MyContext);
  const [diplayContent, setDisplayContent] = useState(false);
  const [newList, setNewList] = useState(contextValue);

  const handleDeleteTask = (index) => {
    let updatedList = [...contextValue];
    updatedList.splice(index, 1);
    updateContextValue(updatedList);
  };

  const toggleStatus = (index) => {
    let updatedList = [...contextValue];
    updatedList[index].status != "Done"
      ? (updatedList[index].status = "Done")
      : (updatedList[index].status = "In progress");
    updateContextValue(updatedList);
  };

  const viewContent = () => {
    setDisplayContent(!diplayContent);
    console.log(contextValue.length);
        console.log(contextValue);
  };

  // dragging
  // const [draggedItem, setDraggedItem] = useState(); 
  const di = useRef(null); //useRef instead
  const doi = useRef(null); //useRef instead

  const handleDragStart = (e, index) => {
    di.current  = index;
    console.log("index1",index)
  }

  const handleDragOver = (index) => {
    doi.current = index;
    console.log("index2", index)

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
  // for debugging local db
  //   const checkContext = () => {
  //     console.log(contextValue.length);
  //     console.log(contextValue);
  //   };

  return (
    <>
      <li key={index} className="border-8 border-blue-200 "
              >
        <div className="flex justify-between items-center"
        
            // className={`draggable-item ${isDragging ? 'dragging' : ''}`}
            onDragEnter={() => handleDragOver(index)}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            draggable="true"
        >
          <div className="flex justify-between">
            <div className="px-8">Task name: {item.title}</div>
            {item.status == "Done" ? (
              <div style={{ color: "red" }}>Status: {item.status}</div>
            ) : (
              <div style={{ color: "green" }}>Status: {item.status}</div>
            )}
            <div className="px-4">
              {diplayContent && <p> {JSON.stringify(item)}</p>}
            </div>
          </div>

          <div className="text-right">
            <button className="btn " onClick={() => toggleStatus(index)}>
              Complete
            </button>
            <button className="btn " onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
            <button className="btn" onClick={() => viewContent()}>
              View
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default Task;
