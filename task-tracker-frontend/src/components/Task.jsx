import MyContext from "../context/MyContext";
import { useContext, useState, useRef, useCallback } from "react";
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
  const di = useRef(); //useRef instead
  const doi = useRef(); //useRef instead
  const [dragStartIndex, setDragStartIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const handleDragStart = (e, index) => {
    
    di.current  = index;
    setDragStartIndex(index);
    e.dataTransfer.setData("text/plain", String(index));
    // console.log(di.current);
    console.log(index);

  }

  const handleDragOver =  useCallback((e, index) => {
    e.preventDefault(); // Prevent default behavior to allow dropping
    // e.stopPropagation();
    doi.current = index;
    // console.log("Drag Over Index:", index);
    setDragOverIndex(index)
    console.log(dragOverIndex)
    console.log(doi.current)
    console.log(index)
    // console.log(doi.current);

  }, []);

  const handleDragEnd = (e) => {
    e.preventDefault(); // Prevent default behavior to allow dropping
    const overIndex = Number(e.dataTransfer.getData("text/plain"));
    // e.stopPropagation();
    
    console.log(dragStartIndex)
    
    console.log(dragOverIndex)
    // console.log(index);
    // console.log(di.current)
    console.log(doi.current)
    const l1 = [...contextValue];
    const dii = l1[overIndex];
    console.log(dragStartIndex)
    console.log(dragOverIndex)
    console.log(dii);
    

    // l1.splice(di.current, 1);
    // l1.splice(doi.current, 0, dii);

    l1.splice(overIndex, 1);
    l1.splice(dragOverIndex, 0, dii);

    di.current = null;
    doi.current = null;
    console.log(l1);
    updateContextValue(l1); //update at the end of drag

  }
  // for debugging local db
  //   const checkContext = () => {
  //     console.log(contextValue.length);
  //     console.log(contextValue);
  //   };

  return (
    <>
      <li key={index} className="border-8 border-blue-200 "
        draggable
        
        // className={`draggable-item ${isDragging ? 'dragging' : ''}`}
        >
        <div className="flex justify-between items-center"
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={handleDragEnd}
          draggable
        
      
        // onDragEnd={
        //   handleDragEnd
        // }
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
