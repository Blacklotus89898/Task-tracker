import {Link} from "react-router-dom"

export default function Navbar() {

    return (
        <>
        <nav className="flex justify-around border-4 rounded-3xl w-2/3  py-2 mx-40">
            <Link to={"/home"}>Home</Link>
            <Link to={"/taskList"}>Task List</Link>
            <Link to={"/new"}>New task</Link>
        </nav>
        </>
    )
}