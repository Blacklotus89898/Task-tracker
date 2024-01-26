import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import MyContextProvider from "../context/MyContextProvider"
export default function Root() {
    return (

        <>
            <MyContextProvider>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </MyContextProvider>
        </>
    )
}