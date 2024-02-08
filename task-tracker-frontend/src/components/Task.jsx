import MyContext from "../context/MyContext";
import { useContext, useState } from "react";
import "./myStyle.css";

function Task({ index, item }) {
  const { contextValue, updateContextValue } = useContext(MyContext);
  const [diplayContent, setDisplayContent] = useState(false);

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
  };

  // for debugging local db
  //   const checkContext = () => {
  //     console.log(contextValue.length);
  //     console.log(contextValue);
  //   };

  return (
    <>
      <li key={index} className="border-8 border-blue-200 ">
        <div className="flex justify-between items-center">
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
