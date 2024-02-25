import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { Link, useNavigate } from "react-router-dom";
import Draggable from "./Draggable.jsx";

export default function NewTask() {
  // data fields
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState();
  const [number, setNumber] = useState(0);
  const { contextValue, updateContextValue } = useContext(MyContext);
  const navigate = useNavigate();  
  
  // functions
  const handleSubmit = (event) => {
    // prevents refreshing
    event.preventDefault();
    navigate("/taskList");
  };

  const addTask = () => {
    const newTask = {
      title: title,
      date: date,
      color: color,
      number: number,
      status: "Created",
    };
    updateContextValue([...contextValue, newTask]);
  };

  const clearInput = (event) => {
    // document.getElementById("newTaskForm").reset();
    event.preventDefault();
    // //  colorInput.set
    //   setColor(null);
      // setDate();
      setNumber(0);
      setTitle("");

  };

  return (
    <>
      <div className="">
        <form 
        id="newTaskForm"
          action="/home"
          onSubmit={handleSubmit}
          className="flex m-4 p-2 justify-around  border border-solid border-10 rounded-full border-blue-600 "
        >
          <div className="flex-col self-center  justify-center">
            <label htmlFor="title" className="block text-center">NewTask: {title}</label>
            <div></div>

            <input
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className=" border-4 border-red-200 border-solid p-4 rounded-full"
            />
          </div>
          <div className="flex-col" >
            <div className=" border-2 rounded-full  border-red-200">

            <label htmlFor="color">Color Picker: </label>
            <input 
            id="colorInput"
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-4 h-4 border-2 rounded-full  border-red-200"
              />
              </div>
            <div className=" border-2 rounded-full  border-red-200">
              <label  htmlFor="">Date: </label>
              <input 
              type="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className=" border-2 rounded-full  border-red-200">
            <input type="file" id="input" name="input" accept="image/png, image/jpeg"/>
            </div>

            <div className=" border-2 rounded-full  border-red-200">
              <label htmlFor="">Number: </label>
              <input
                type="number"
                onChange={(e) => setNumber(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="flex-col content-center justify-center items-center self-center">
            <div>
              <Link
                to={"/home"}
                className="border-2 border-red-100 p-10 py-3 rounded-full"
              >
                {" "}
                Go Back
              </Link>
              <button
                className="border-2 border-blue-300 p-10 py-3 rounded-full"
                onClick={(e) => {
                  clearInput(e);
                }}
              >
                Clear
              </button>
              <button
                className="border-2 border-blue-300 p-10 py-3 rounded-full"
                onClick={() => {
                  addTask();
                }}
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
      <Draggable collapseProps={{collapseable: true}}>
        <button>Children component</button>
        <input type="button" value="" />
                <input type="checkbox" name="" id="" />
        </Draggable>
    </>
  );
}
