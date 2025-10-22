import React from 'react';
import { Link, NavLink } from 'react-router';
import githubLogo from "../assets/github.png";
import Logo from "../assets/logo.png";


const Navber = () => {

    const handleClick = () => {
        window.open("https://github.com/nayeem-94", "_blank"); // change URL to your GitHub
    };
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 shadow-sm container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    (isActive
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-5"
                                        : "") + " font-semibold"
                                }
                            >
                                Home
                            </NavLink></li>
                            <li>
                                <NavLink
                                    to="/apps"
                                    className={({ isActive }) =>
                                        (isActive
                                            ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-7"
                                            : "") + " font-semibold"
                                    }
                                >
                                    Apps
                                </NavLink>

                            </li>
                            <li><NavLink
                                to="/installation"
                                className={({ isActive }) =>
                                    (isActive
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-5"
                                        : "") + " font-semibold"
                                }
                            >
                                Installation
                            </NavLink></li>
                        </ul>

                    </div>

                    <Link to="/home" className={({ isActive }) =>
                    (isActive
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-5"
                        : "")
                    }>

                        <div className='flex gap-1 items-center'>
                            <img src={Logo} className='w-8' alt="" />
                            <span className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>HERO.IO</span>

                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex gap-4">

                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            (isActive
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-5"
                                : "") + " font-semibold"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/apps"
                        className={({ isActive }) =>
                            (isActive
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-7"
                                : "") + " font-semibold"
                        }
                    >
                        Apps
                    </NavLink>
                    <NavLink
                        to="/installation"
                        className={({ isActive }) =>
                            (isActive
                                ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2] underline decoration-[#632ee3] underline-offset-5"
                                : "") + " font-semibold"
                        }
                    >
                        Installation
                    </NavLink>



                </div>
                <div className="navbar-end">
                    <button onClick={handleClick} className='btn text-lg font-semibold text-sm text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>
                        <img src={githubLogo} alt="GitHub" className="w-6 h-6 invert text-white" />
                        Contribute
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navber;