import React from 'react';
import { Link, NavLink } from 'react-router';
import githubLogo from "../assets/github.png";

const Navber = () => {

    const handleClick = () => {
        window.open("https://github.com/nayeem-94", "_blank"); // change URL to your GitHub
    };
    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                    </div>

                    <Link to="/home" className=''>

                        <div className='flex gap-1 items-center'>
                            <img src="/src/assets/logo.png" className='w-8' alt="" />
                            <span className='text-xl font-bold'>HERO.IO</span>

                        </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex gap-3">


                    <NavLink to="/home" className='btn'>Home</NavLink>
                    <NavLink to="/apps" className='btn'>Apps</NavLink>
                    <NavLink to="/installation" className='btn'>Installation</NavLink>

                </div>
                <div className="navbar-end">
                    <button onClick={handleClick} className='btn'>
                        <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
                        Contribute
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navber;