import { Outlet } from "react-router"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

const Layout = () => {
    return (

        <div>
            <Navbar />
            <div className="flex">
                <Sidebar></Sidebar>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    )
}

export default Layout