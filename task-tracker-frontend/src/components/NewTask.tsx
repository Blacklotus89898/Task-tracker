import { useEffect, useState } from "react"

export default function NewTask() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [color, setColor] = useState("");
    const [number, setNumber] = useState(0);
    const [data, setData] = useState(0);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            // Make a fetch request or any asynchronous operation
            await fetch('https://wttr.in/Montreal').
            then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
            // console.log(response.text());
            // const result = await response.json();
    
            // Update state with the fetched data
            // setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Call the fetchData function
        fetchData();
    
        // Cleanup function (optional)
        return () => {
          // Perform cleanup if needed (e.g., cancel subscriptions)
        };
      }, []); 




    return (
        <>
            <div className="">
                <form action="" className="flex m-4 p-2 justify-around  border border-solid border-10 rounded-full border-blue-600 ">
                    <div className="flex-col border border-10 border-teal-100 self-center">

                        <label htmlFor="title">Title of the NewTask</label>
                        <div></div>

                        <input name="title" value={title} 
                         onChange={(e) => setTitle(e.target.value)}
                        type="text" 
                        
                        className=" border border-8 border-red-500 border-solid p-4 rounded-xl" />
                    </div>
                    <div className="flex-col">

                        <label htmlFor="color">Color Picker</label>
                        <div></div>
                        <input type="color" 
                         onChange={(e) => setColor(e.target.value)}
                        
                        className="w-40 h-40" />

                    </div>

                    <div className="flex-col content-center justify-center items-center self-center">
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
                    
                        className="border border-8 border-red-500"/>
                        </div>
                    </div>
                </form>
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
                </div>

            </div>
        </>
    )
}