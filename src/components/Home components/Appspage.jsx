import React from 'react';
import Appcart from './Appcart';

const Appspage = ({ data }) => {
    console.log("data", data);
    return (
        <>
            <div className='container mx-auto my-10 '>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-bold'>Trending Apps</h1>
                    <p className='md:text-lg px-6 mt-6 text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-7 p-3 mt-5 '>
                    {data.map(app => (
                        <Appcart key={app.id} app={app} />
                    ))}
                </div>
                <div className='flex justify-center items-center cursor-pointer py-10 '>
                    <button className='bg-gradient-to-r cursor-pointer from-[#632ee3] text-xl hover:scale-105 duration-300 to-[#9f62f2] text-white font-semibold py-2 px-8 rounded'>Show All</button>
                </div>

            </div>






        </>
    );
};

export default Appspage;