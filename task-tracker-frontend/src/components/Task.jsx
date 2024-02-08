import MyContext from "../context/MyContext";
import { useContext } from "react";
import "./myStyle.css";

function Task({index, item}) {
  const { contextValue, updateContextValue } = useContext(MyContext);

  const handleDeleteTask = (index) => {
    let updatedList = [...contextValue];
    updatedList.splice(index, 1);
    updateContextValue(updatedList);
  };

  const toggle = (index) => {
    let updatedList = [...contextValue];
     (updatedList[index].status != "Done") ? updatedList[index].status = "Done": updatedList[index].status = "In progress"; 
    updateContextValue(updatedList);
  };

  // for debugging local db
  const checkContext = () => {
    console.log(contextValue.length);
    console.log(contextValue);
  };

  return (
    <>
            <li key={index} className="border-8 border-blue-200 ">
              <div className="flex justify-between items-center">
                <div className="flex justify-between">
                  <div className="px-8">Task name: {item.title}</div>
                  {
                    item.status == "Done" ? (
                      <div style={{color: "red"}}>Status: {item.status}</div>
                      ) : (
                      <div style={{color: "green"}}>Status: {item.status}</div>
                  )}
                </div>

                <div className="text-right">
                  <button className="btn " onClick={() => toggle(index)}>
                    Complete
                  </button>
                  <button
                    className="btn "
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                  <button className="btn" onClick={() => checkContext()}>
                    View
                  </button>
                </div>
              </div>
            </li>

    </>
  );
}

export default Task;
