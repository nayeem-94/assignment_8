import React from 'react';
import { NavLink } from 'react-router';
import download from "../../assets/icon-downloads.png"
import rating from "../../assets/icon-ratings.png"



const Appcart = ({ app }) => {
    return (
        <NavLink to={`/home/${app.id}`}>

            <div className='cursor-pointer  hover:scale-105 duration-300 '>

                <div className='p-5 bg-white flex flex-col gap-8 rounded-lg shadow-md'>
                    <img className='w-full' src={app.image} alt={app.title} />
                    <h1 className='font-semibold text-lg'>{app.title}</h1>
                    <div className='flex flex-col md:flex-row justify-between gap-3'>
                        <div className='flex gap-2 items-center justify-center bg-[#f1f5e8] p-1'>
                            <img className='w-5 ' src={download} alt="" />
                            <p className='text-lg font-semibold text-[#00D390]'>{app.downloads}</p>
                        </div>

                        <div className='flex gap-2 items-center justify-center bg-[#fff0e1] p-1'>
                            <img className='w-5' src={rating} alt="" />
                            <p className='text-lg font-semibold text-orange-500'>{app.ratingAvg}</p>
                        </div>
                    </div>
                </div>

            </div>
        </NavLink>
    );
};

export default Appcart;