import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { Link, useNavigate } from "react-router-dom";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");
  const [number, setNumber] = useState(0);
  // const [data] = useState(0);
  const { contextValue, updateContextValue } = useContext(MyContext);
  // const history = useHistory();
  const navigate = useNavigate();
  // prevents refreshing
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/taskList');
  };

  const addTask = () => {
    const newTask = {
      title: title,
      date: date,
      color: color,
      number: number,
      status: "Created"
    };
    updateContextValue([...contextValue, newTask]);
  };

  return (
    <>
      <div className="">
        <form
          action="/home"
          // onSubmit={handleSubmit}
          onSubmit={handleSubmit}
          className="flex m-4 p-2 justify-around  border border-solid border-10 rounded-full border-blue-600 "
        >
          <div className="flex-col border border-10 border-teal-100 self-center">
            <label htmlFor="title">Title of the NewTask</label>
            <div></div>

            <input
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className=" border-8 border-red-500 border-solid p-4 rounded-xl"
            />
          </div>
          <div className="flex-col">
            <label htmlFor="color">Color Picker: </label>
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-4 h-4"
            />
            <div>
              <label htmlFor="">Date:</label>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>

            <div>
              <label htmlFor="">Number: </label>
              <input
                type="number"
                onChange={(e) => setNumber(parseInt(e.target.value))}
                className="border-8 border-red-500"
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
                className="border-2 border-red-100 p-10 py-3 rounded-full"
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
