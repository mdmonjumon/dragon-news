
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <header>
            <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;