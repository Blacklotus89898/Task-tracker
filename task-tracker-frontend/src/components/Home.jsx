import { useContext, useEffect, useState } from "react";
import MyContext from "../context/MyContext";
import "./Home.css";

// dashboard
export default function Home() {
  const { contextValue } = useContext(MyContext);

  const [progressValue, setProgressValue] = useState(50);

  useEffect(() => {
    setProgressValue(
      (contextValue.filter((t) => t.status === "Done").length * 100) /
        contextValue.length
    );
  }, [contextValue]);

  return (
    <>
    {/* migrate some stuff to a dashboard and create a header instead of navbar, pie chart using js and css + canvas */}
      <div className="text-center text-2xl p-16">
        <div> Welcome to home!!!</div>
        <h3>Total task: {contextValue.length}</h3>
        <h3>
          Task completed:{" "}
          {contextValue.filter((t) => t.status == "Done").length}
        </h3>
      </div>
      <div className="relative text-center flex justify-center items-center">
        <div
          className="element2 absolute top-0  z-20 border-4 border-blue-200 bg-blue-300"
          style={{ width: `${progressValue * 5}px`, height: "10px" }}
        ></div>
        <div
          className="element1 absolute top-0  z-10 border-4 border-red-400"
          style={{ width: `${500}px`, height: "10px" }}
        ></div>
      </div>

    </>
  );
}
