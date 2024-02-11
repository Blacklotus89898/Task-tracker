import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { Link, useNavigate } from "react-router-dom";

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

  return (
    <>
      <div className="">
        <form
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
          <div className="flex-col">
            <label htmlFor="color">Color Picker: </label>
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-4 h-4 border-2 rounded-full  border-red-200"
            />
            <div>
              <label htmlFor="">Date: </label>
              <input className=" border-2 rounded-full  border-red-200"
              type="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div>
              <label htmlFor="">Number: </label>
              <input
                type="number"
                onChange={(e) => setNumber(parseInt(e.target.value))}
                className="border-2 border-red-100 rounded-full"
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
                Home
              </Link>
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
    </>
  );
}
