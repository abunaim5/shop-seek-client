import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const { user, loading } = useAuth();

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase">
                        {navLinks}
                    </ul>
                </div>
                <p className="text-2xl font-bold">Shop<span className="text-accent">Seek</span></p>
            </div>
            <div className="navbar-center hidden lg:flex uppercase">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ? <button className="btn btn-sm btn-accent uppercase rounded-none">Sign Out</button> : <>
                        <Link to='/login'><button className="btn btn-sm btn-accent btn-outline uppercase rounded-none">Login</button></Link>
                        <Link to='/register'><button className="btn btn-sm btn-accent uppercase rounded-none text-gray-800">Sign Up</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;