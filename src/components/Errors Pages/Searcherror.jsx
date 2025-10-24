import React from 'react';
import errorImage from "../../assets/App-Error.png";
import { NavLink } from 'react-router';
const Searcherror = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5 pt-10'>
                <div>
                    <img src={errorImage} alt="" className='px-5 pb-3 md:px-0' />
                </div>
                <div>
                    <h1 className='text-3xl font-bold '>OOPS!! APP NOT FOUND</h1>
                </div>
                <div>
                    <p className='text-gray-400 px-5'> The App you are requesting is not found on our system. please try another apps</p>
                </div>
                <div>
                    <NavLink to="/home">
                        <div className='flex justify-center items-center cursor-pointer py-10 '>
                            <button className='bg-gradient-to-r cursor-pointer from-[#632ee3] text-xl hover:scale-105 duration-300 to-[#9f62f2] text-white font-semibold py-2 px-8 rounded'>Go Back</button>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Searcherror;