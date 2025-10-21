import React from 'react';
import errorPage from "../../assets/error-404.png";
import { Link, NavLink } from 'react-router';



const PageEror = () => {
    return (
        <div className='flex flex-col items-center gap-2  justify-center mt-10'>
            <img className='w-1/3' src={errorPage} alt="404 Error" />
            <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
            <p className='text-gray-500'>the page you are looking for is not available.</p>

            <NavLink
                        to="/home"
            >
                <button className='btn text-lg font-semibold text-sm text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]'>
                    Go Back!
                </button>
            </NavLink>
        </div>
    );
};

export default PageEror;