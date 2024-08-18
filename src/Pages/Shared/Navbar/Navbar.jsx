import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdMenu } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, loading, logoutUser } = useAuth();

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Blog</Link></li>
    </>

    const handleLogoutUser = () => {
        logoutUser()
            .then(() => {
                toast.success('You are signed out.');
            }).catch((error) => {
                console.error(error.message);
            });
    };

    // if(loading) {
    //     return
    // }

    return (
        <div className="navbar bg-black/5 px-2 lg:px-10 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                    <MdMenu className="text-3xl" />
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
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="avatar">
                            <div className="w-14 rounded-full">
                                <img src={user?.photoURL ? user?.photoURL : 'https://i.postimg.cc/KvrBDjKN/user.png'} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>{user?.displayName ? user.displayName : 'Unknown'}</a></li>
                            <li><a>Profile</a></li>
                            <li><button onClick={handleLogoutUser} className="text-red-600">Logout</button></li>
                        </ul>
                    </div> : <>
                        <Link to='/login'><button className="btn btn-sm btn-accent btn-outline uppercase rounded-sm">Login</button></Link>
                        <Link to='/register'><button className="btn btn-sm btn-accent uppercase rounded-sm text-gray-800">Sign Up</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;