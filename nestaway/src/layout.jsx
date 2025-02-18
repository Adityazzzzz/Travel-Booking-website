import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function Layout(){
    return(
        <div className="py-2 px-8  flex flex-col min-h-screen">
            <Header/>
            <hr className="mt-2 shadow-md shadow-gray-300"/>
            <Outlet/>
        </div>
    )
}