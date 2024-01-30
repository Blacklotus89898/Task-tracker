import { useContext, useEffect, useState } from "react"
import MyContext from "../context/MyContext";
// import {setContextValue, MyContext} from "../context/MyContextProvider";
import {Link} from "react-router-dom"
import contextValue  from "../context/MyContextProvider";
// import { MyContext } from "../context/MyContextProvider";

export default function NewTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [color, setColor] = useState("");
    const [number, setNumber] = useState(0);
    const [data,] = useState(0);
    const {contextValue, updateContextValue} = useContext(MyContext);

    const c = (val) => {
        updateContextValue(val);
    }
    // useEffect(() => {
    //     // Function to fetch data
    //     const fetchData = async () => {
    //       try {
    //         // Make a fetch request or any asynchronous operation
    //         await fetch('https://wttr.in/Montreal').
    //         then(response => response.text())
    //         .then(data => console.log(data))
    //         .catch(error => console.error('Error:', error));
    //         // console.log(response.text());
    //         // const result = await response.json();
    
    //         // Update state with the fetched data
    //         // setData(result);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //       }
    //     };
    
    //     // Call the fetchData function
    //     fetchData();
    
    //     // Cleanup function (optional)
    //     return () => {
    //       // Perform cleanup if needed (e.g., cancel subscriptions)
    //     };
    //   }, []); 




    return (
        <>
            <div className="">
                {/* <form action="/home" className="flex m-4 p-2 justify-around  border border-solid border-10 rounded-full border-blue-600 "> */}
                    <div className="flex-col border border-10 border-teal-100 self-center">

                        <label htmlFor="title">Title of the NewTask</label>
                        <div></div>

                        <input name="title" value={title} 
                         onChange={(e) => {setTitle(e.target.value);
                        }
                        }
                        type="text" 
                        
                        className=" border-8 border-red-500 border-solid p-4 rounded-xl" />
                    </div>
                    <div className="flex-col">

                        <label htmlFor="color">Color Picker: </label>
                        <input type="color" 
                         onChange={(e) => setColor(e.target.value)}                        
                        className="w-4 h-4" />
                        <div>

                        <label htmlFor="">Date:</label>
                        <input type="date" 
                         onChange={(e) => setDate(e.target.value)}
                         />
                        </div>

                        <div>
                            
                        <label htmlFor="">Number:   </label>
                        <input type="number" 
                         onChange={(e) => setNumber(parseInt(e.target.value))}
                    
                        className="border-8 border-red-500"/>
                        </div>

                    </div>

                    <div className="flex-col content-center justify-center items-center self-center">
                        <div>
                        <Link to={"/home"} className="border-2 border-red-100 p-10 py-3 rounded-full"> Home</Link>  
                        <button className="border-2 border-red-100 p-10 py-3 rounded-full" onClick={() => {c(title)}}>Create</button>
                        </div>
                    </div>
                {/* </form> */}

                <div>Result
                    <ul>
                        <li>Title: {title}</li>
                    </ul>
                    <ul>
                        <li>Color: {color}</li>
                    </ul>
                    <ul>
                        <li>Date: {date}</li>
                    </ul>
                    <ul>
                        <li>Number: {number}</li>
                    </ul>
                    <ul>
                        <li>Weather: {data}</li>
                    </ul>
                    <ul>
                        <li>Context: {contextValue}</li>
                    </ul>
                </div>

            </div>
        </>
    )
}