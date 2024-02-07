import MyContext from "../context/MyContext";
import { useContext } from "react";
import "./myStyle.css";

function TaskList() {
  const { contextValue, updateContextValue } = useContext(MyContext);

  const handleDeleteTask = (index) => {
    let updatedList = [...contextValue];
    updatedList.splice(index, 1);
    updateContextValue(updatedList);
  };

  const toggle = (index) => {
    let updatedList = [...contextValue];
    updatedList[index].status = "done";
    updateContextValue(updatedList);
  };

  // for debugging local db
  const checkContext = () => {
    console.log(contextValue.length);
    console.log(contextValue);
  };

  return (
    <>
      <h1>Todos </h1>
      <ul>
        {contextValue.length != 0 ? (
          contextValue.map((item, index) => (
            <li key={index} className="border-8 border-blue-200 ">
              <div className="flex justify-between items-center">
                <div className="flex justify-between">
                  <div className="px-8">Task name: {item.title}</div>

                  <div>Status: {item.status}</div>
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
          ))
        ) : (
          <div>No task to render</div>
        )}
      </ul>
    </>
  );
}

export default TaskList;
