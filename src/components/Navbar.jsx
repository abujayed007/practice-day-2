import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }
    const navLinks = <>
        <li><Link className="text-xl font-semibold" to='/'>Home</Link></li>
        <li><Link className="text-xl font-semibold" to='/about'>About</Link></li>
        <li><Link className="text-xl font-semibold" to='/contact'>Contact</Link></li>
        {
            user && <li><Link className="text-xl font-semibold" to='/dashboard'>Dashboard</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="text-xl font-semibold" to='/'>Navbar</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-x-3">
                {
                    user ? <>
                        <button onClick={handleLogOut} className="btn text-xl font-semibold">
                        <Link >Logout</Link>
                        </button>
                        <img className="w-10 h-10 border-x-red-600 rounded-full" src={user?.photoURL} alt="" />
                    </> :
                        <>
                            <Link to='/login' className="text-xl font-semibold">Login</Link>
                            <Link to='/register' className="text-xl font-semibold">Register</Link>
                        </>
                }

                <img src="" alt="" />
            </div>
        </div>
    );
};

export default Navbar;