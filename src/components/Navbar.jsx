import { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
    const { user, handleSignOut } = useContext(AuthContext)
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between my-7 gap-4 md:gap-0">
            <div className="w-full"></div>
            <div className="space-x-4 text-lg text-[#706F6F] font-medium md:w-full text-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center md:justify-end gap-2 md:w-full ">

                {
                    user && user.email ?
                        <small>{user.email}</small>
                        : <FaCircleUser className="text-5xl" />
                }

                {
                    user && user.email ?
                        <button onClick={handleSignOut}  className="bg-[#403F3F] text-white font-semibold text-xl px-8 py-3 cursor-pointer">Logout</button>
                        : <Link to='/auth/login' className="bg-[#403F3F] text-white font-semibold text-xl px-8 py-3">Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;